import {Chart} from "./chart.js";

const mockedMetadata = require("../testMetadata")

export function mockedChart() {
    const data = new Chart(mockedMetadata);

    data.addChartInfo("chart1");
    data.addChartInfo("chart2");
    data.addChartInfo("chart3");

    for (let num = 0; num < 30; num++) {
        let timestamp = num;
        let values = {
            "chart1": Math.random() * 2,
            "chart2": Math.random() * 2,
            "chart3": Math.random() * 2,
        }
        data.addPoint(timestamp, values);
    }

    return data;
}