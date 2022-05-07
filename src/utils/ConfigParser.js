import {Metadata} from "./Metadata.js";
import {Axis} from "../chart/axis";

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
                chart.leftAxis == null ? new Axis(null, null) : new Axis(chart.leftAxis.unit, chart.leftAxis.decimals),
                chart.rightAxis == null ? new Axis(null, null) : new Axis(chart.rightAxis.unit, chart.rightAxis.decimals),
                chart.xLabel,
                chart.yLeftLabel,
                chart.yRightLabel,
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
