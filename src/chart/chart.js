import {DataLoader} from "../utils/DataLoader.js"
import async from 'async';
import {ChartInfo} from "./chartInfo.js";
import {AxisSide} from "./axisSide.js";

class Chart {
    metadata;
    viewingTimeInterval;
    data;
    dataSeries = {};

    constructor(metadata) {
        this.metadata = metadata;
        this.viewingTimeInterval = metadata.timeInterval;
        this.data = [];
        this.chartInfoFromMetadata();
    }

    getLatestValues() {
        return this.data.slice(-1);
    }

    getSeriesColor(seriesName) {
        return this.dataSeries[seriesName].color;
    }

    addData(newData) {
        newData.forEach(v =>
            Object.entries(v.values).forEach(([name, value]) => {
                const side = this.dataSeries[name].yAxisSide;
                const axis = side === AxisSide.LEFT ? this.metadata.leftAxis : this.metadata.rightAxis;
                const decimals = axis.decimals
                v.values[name] = value.toFixed(decimals)
            }))
        this.data = this.data.concat(newData);
    }

    chartInfoFromMetadata() {
        for (const data of this.metadata.dataAccessPaths) {
            this.addChartInfo(data.name, data.axis);
        }
    }

    addChartInfo(name, yAxisSide = AxisSide.LEFT, color = null) {
        if (color == null) {
            color = Chart.randomColor();
        }
        this.dataSeries[name] = new ChartInfo(color, yAxisSide)
    }

    static randomColor() {
        return "#" + Math.floor(Math.random() * 16777215)
            .toString(16);
    }

    summary() {

    }
}

class Group {
    name;
    description;
    charts;

    constructor(name, description, charts) {
        this.name = name;
        this.description = description;
        this.charts = charts;
    }

    async updateCharts() {
        this.charts = await Promise.resolve(async.concat(this.charts, loadDataToChart));
    }
}

async function loadDataToChart(chart) {
    const dataLoader = new DataLoader()
    chart.addData(
        await dataLoader.loadData(chart)
    );
    return chart;
}

function createCharts(metadataList) {
    return metadataList.map(metadata => new Chart(metadata));
}

function createGroups(groupsMetadataList) {
    let groups = groupsMetadataList.map(group => new Group(group[0], group[1], createCharts(group[2])));
    groups.forEach(group => group.updateCharts());
    return groups;
}

export {Chart, Group, createGroups}