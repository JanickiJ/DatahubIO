import {DataLoader} from "./DataLoader"

class Chart {
    metadata;
    viewingTimeInterval;
    data;
    dataSeries = {};

    constructor(metadata) {
        this.metadata = metadata;
        this.viewingTimeInterval = metadata.timeInterval;
        this.data = [];
    }

    addData(newData) {
        this.data = this.data.concat(newData);
    }

    addChartInfo(name, color = null) {
        if (color == null) {
            color = Chart.randomColor();
        }
        this.dataSeries[name] = {
            "color": color
        }
    }

    static randomColor() {
        return "#" + Math.floor(Math.random() * 16777215)
            .toString(16);
    }
}

class ChartContainer {
    charts;

    constructor(charts) {
        this.charts = charts;
    }
}

async function loadDataToChart(chart) {
    const dataLoader = new DataLoader()
    chart.addData(
        await dataLoader.loadData(chart)
    );
    return chart;
}

async function createCharts(metadataList) {
    let dataLoaderCalls = [];
    metadataList.forEach(metadata => {
        dataLoaderCalls.push(loadDataToChart(new Chart(metadata)));
    });
    return new ChartContainer(await Promise.all(dataLoaderCalls).then((v) => v));
}

export {Chart, ChartContainer, createCharts}