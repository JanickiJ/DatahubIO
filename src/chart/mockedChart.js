import {Chart} from "./chart.js";

import {mockedMetadata} from "../testMetadata"

export function mockedChart() {
    const chart = new Chart(mockedMetadata);

    let points = []

    for (let num = 0; num < 30; num++) {
        let timestamp = num;
        let values = {}
        for (const dataAccessPath of chart.metadata.dataAccessPaths) {
            values[dataAccessPath.name] = Math.random() * 2;
        }
        points.push({
            "timestamp": timestamp,
            "values": values
        })
    }

    chart.addData(points);

    return chart;
}