import {Metadata} from "./Metadata.js";

function parseConfig(config) {
    const groupedChartsMetadata = []
    const parsedConfig = JSON.parse(config)
    for (const group of parsedConfig.groups){
        const groupChartsMetadata = []
        for (const chart of group.charts) {
            const chartMetadata = new Metadata(
                chart.dataDetails,
                chart.timestampsPath,
                chart.startDate,
                chart.endDate,
                chart.xLabel,
                chart.yLabel,
                chart.title,
                chart.xUnit,
                chart.yUnit,
            )

            groupChartsMetadata.push(chartMetadata)
        }
        groupedChartsMetadata.push([group.name, groupChartsMetadata])
    }

    return groupedChartsMetadata
}

export {parseConfig}
