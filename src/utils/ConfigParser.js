import {Metadata} from "./Metadata";

export function parseConfig(config) {
    const chartsMetadata = []
    const parsedConfig = JSON.parse(config)
    for (const chart of parsedConfig.charts) {
        const chartMetadata = new Metadata(
            chart.dataDetails,
            chart.timestampsPat,
            chart.startDate,
            chart.endDate,
            chart.xLabel,
            chart.yLabel,
            chart.title,
            chart.xUnit,
            chart.yUnit,
        )

        chartsMetadata.push(chartMetadata)
    }

    return chartsMetadata
}
