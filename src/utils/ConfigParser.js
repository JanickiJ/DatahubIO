import {Metadata} from "./Metadata";
import {Axis} from "../chart/axis";

export function parseConfig(config) {
    const chartsMetadata = []
    const parsedConfig = JSON.parse(config)
    for (const chart of parsedConfig.charts) {
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

        chartsMetadata.push(chartMetadata)
    }

    return chartsMetadata
}
