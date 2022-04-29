import {TimeInterval} from "./TimeInterval.js";
import {AxisSide} from "../chart/axisSide.js";

class Metadata {
    initEndpoint;
    timeInterval;
    dataAccessPaths = [];
    timestampAccessPath = [];
    xLabel;
    yLabel;
    title;
    xUnit;
    yUnit;
    offset;

    constructor(dataDetails, timestampAccessPath, startDate, endDate, xLabel, yLabel, title, xUnit, yUnit, offset = 0) {
        this.timeInterval = new TimeInterval(startDate, endDate)
        this.initEndpoint = dataDetails.endpoint
        this.offset = offset
        this.xLabel = xLabel;
        this.yLabel = yLabel;
        this.title = title;
        this.xUnit = xUnit;
        this.yUnit = yUnit;


        this.timestampAccessPath = timestampAccessPath
        const dataAccessPaths = dataDetails.data
        dataAccessPaths.forEach(v => {
            const side = v.axis
            v.axis = typeof side === 'undefined' ? AxisSide.LEFT : new AxisSide(side)
        })
        this.dataAccessPaths = dataAccessPaths
    }

}

export {Metadata}
