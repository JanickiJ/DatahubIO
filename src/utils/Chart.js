const DataLoader = require("./DataLoader");

class Chart {
    metadata;
    viewingTimeInterval;
    data;

    constructor(metadata) {
        this.metadata = metadata;
        this.viewingTimeInterval = metadata.timeInterval;
        this.data = [];
    }

    addData(newData) {
        // TODO: implement the addition of data
    }
}

class ChartContainer {
    charts;

    constructor(charts) {
        this.charts = charts;
    }
}

async function loadDataToChart(chart) {
    chart.addData(
        new DataLoader().loadData(chart.metadata)
    );
    return chart;
}

async function createCharts(metadataList) {
    let dataLoaderCalls = [];
    metadataList.forEach(metadata => {
        dataLoaderCalls.push(loadDataToChart(new Chart(metadata)));
    });
    return new ChartContainer(await Promise.all(dataLoaderCalls));
}

module.exports = {Chart, ChartContainer, createCharts}