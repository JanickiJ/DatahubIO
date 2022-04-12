import {TimeInterval} from "./TimeInterval"

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


        this.dataAccessPaths = dataDetails.data
        this.timestampAccessPath = timestampAccessPath
    }

}

export {Metadata}
