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
        this.chartInfoFromMetadata()
    }

    addData(newData) {
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
}

class Group {
    name;
    charts;

    constructor(name, charts) {
        this.name = name;
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
    let groups = groupsMetadataList.map(group => new Group(group[0], createCharts(group[1])));
    groups.forEach(group => group.updateCharts());
    return groups;
}

export {Chart, Group, createGroups}