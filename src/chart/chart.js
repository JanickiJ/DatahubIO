import {DataLoader, merge} from "../utils/DataLoader.js"
import async from 'async';
import {ChartInfo} from "./chartInfo.js";
import {AxisSide} from "./axisSide.js";
import store from "../store/store";

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

    updateData(newData) {
        newData.forEach(v =>
            Object.entries(v.values).forEach(([name, value]) => {
                const side = this.dataSeries[name].yAxisSide;
                const axis = side === AxisSide.LEFT ? this.metadata.leftAxis : this.metadata.rightAxis;
                const decimals = axis.decimals
                v.values[name] = value.toFixed(decimals)
            }))
        // this.data = this.data.concat(newData);
        this.data = merge(this.data, newData)
        //console.log(this.data)
        this.data = this.data.filter(data_point => this.metadata.timeInterval.isIn(new Date(data_point['timestamp'])) )
        //console.log(this.data)
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
        this.charts = await Promise.resolve(async.concat(this.charts, loadInitDataToChart));
    }

    async refreshCharts() {
        this.charts = await Promise.resolve(async.concat(this.charts, refreshChartData));
    }
}



async function refreshChartData(chart) {
    const dataLoader = new DataLoader()
    chart.updateData(
        await dataLoader.refreshData(chart)
    );
    return chart;
}

async function loadInitDataToChart(chart) {
    const dataLoader = new DataLoader()
    chart.updateData(
        await dataLoader.loadInitData(chart)
    );
    return chart;
}

function refreshGroups(groups) {
    groups.forEach(group => group.refreshCharts());
}

function createCharts(metadataList) {
    return metadataList.map(metadata => new Chart(metadata));
}

function createGroups(groupsMetadataList) {
    let groups = groupsMetadataList.map(group => new Group(group[0], createCharts(group[1])));
    groups.forEach(group => group.updateCharts());
    return groups;
}

export {Chart, Group, createGroups, refreshGroups}