import {DataLoader} from "./DataLoader"
import async from 'async';

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

    chartInfoFromMetadata(){
        for (const data of this.metadata.dataAccessPaths) {
            this.addChartInfo([data["name"]]);
        }
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
    return chart
}

function createCharts(metadataList) {
    let charts = metadataList.map(metadata => new Chart(metadata));
    return Promise.resolve(async.concat(charts, loadDataToChart))
}

export {Chart, ChartContainer, createCharts}