import {TimeInterval} from "./TimeInterval.js";
import {AxisSide} from "../chart/axisSide.js";

class Metadata {
    initEndpoint;
    timeInterval;
    dataAccessPaths = [];
    timestampAccessPath = [];
    xLabel;
    yLeftLabel;
    yRightLabel;
    title;
    xUnit;
    yUnit;
    leftAxis;
    rightAxis;
    offset;

    constructor(dataDetails, timestampAccessPath, startDate, endDate, leftAxis, rightAxis, xLabel, yLeftLabel, yRightLabel, title, xUnit, yUnit, offset = 0) {
        this.timeInterval = new TimeInterval(startDate, endDate)
        this.initEndpoint = dataDetails.endpoint
        this.leftAxis = leftAxis;
        this.rightAxis = rightAxis;
        this.xLabel = xLabel;
        this.yLeftLabel = yLeftLabel;
        this.yRightLabel = yRightLabel;
        this.title = title;
        this.xUnit = xUnit;
        this.yUnit = yUnit;
        this.offset = offset


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
