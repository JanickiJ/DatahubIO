import {Chart} from "./chart.js";

import {mockedMetadata} from "../testMetadata"
import {AxisSide} from "./axisSide";

export function mockedChart() {
    const chart = new Chart(mockedMetadata);

    chart.addChartInfo("chart1", AxisSide.LEFT);
    chart.addChartInfo("chart2", AxisSide.LEFT);
    chart.addChartInfo("chart3", AxisSide.RIGHT);

    let points = []

    for (let num = 0; num < 30; num++) {
        let timestamp = num;
        let values = {
            "chart1": Math.random() * 2,
            "chart2": Math.random() * 2,
            "chart3": Math.random() * 10,
        }
        points.push({
            "timestamp" : timestamp,
            "values": values
        })
    }

    chart.addData(points);

    return chart;
}