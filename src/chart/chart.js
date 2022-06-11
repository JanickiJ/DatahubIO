import {DataLoader, merge} from "../utils/DataLoader.js"
import async from 'async';
import {ChartInfo} from "./chartInfo.js";
import {AxisSide} from "./axisSide.js";
import {expandToMatch, isIn, TimeInterval} from "../utils/TimeInterval.js"

export class Chart {
    metadata;
    viewingTimeInterval;
    data;
    dataSeries = {};

    constructor(metadata) {
        this.metadata = metadata;
        this.viewingTimeInterval = new TimeInterval(metadata.timeInterval.startDate, metadata.timeInterval.endDate);
        this.data = [];
        chartInfoFromMetadata(this);
    }
}


// existing data and new data is always sorted
export function updateData(chart,newData) {
    newData.forEach(v => {
            Object.entries(v.values).forEach(([name, value]) => {
                const side = chart.dataSeries[name].yAxisSide;
                const axis = side === AxisSide.LEFT ? chart.metadata.leftAxis : chart.metadata.rightAxis;
                const decimals = axis.decimals
                v.values[name] = value.toFixed(decimals)
            })
        }
    )
    chart.data = merge(chart.data, newData)
    chart.data = chart.data.filter(data_point => isIn(chart.metadata.timeInterval, new Date(data_point['timestamp'])))
}

export function chartInfoFromMetadata(chart) {
    for (const data of chart.metadata.dataAccessPaths) {
        addChartInfo(chart,data.name, data.axis);
    }
}

export function addChartInfo(chart,name, yAxisSide = AxisSide.LEFT, color = null) {
    if (color == null) {
        color = randomColor();
    }
    chart.dataSeries[name] = new ChartInfo(color, yAxisSide)
}

export function randomColor() {
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += Math.floor(Math.random() * 10);
    }
    return color;
}

export function updateInterval(chart){
    chart.metadata.timeInterval = expandToMatch(chart.metadata.timeInterval,chart.viewingTimeInterval);
}

export async function refreshCharts(group) {
    group.charts = await async.concat(group.charts, refreshChartData);
}

const dataLoader = new DataLoader()

async function refreshChartData(chart) {
  updateInterval(chart);
  updateData(
      chart,
      await dataLoader.refreshData(chart)
  );
  return chart;
}


export function createCharts(metadataList) {
  return metadataList.map(metadata => new Chart(metadata));
}
