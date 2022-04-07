const TimeInterval = require("./TimeInterval.js");

class Metadata {
    timeInterval;
    initEndpoint;
    offset;
    dataAccessPaths = [];
    timestampAccessPath = []


    constructor(dataDetails, timestampAccessPath, startDate, endDate, offset = 0) {
        this.timeInterval = new TimeInterval(startDate, endDate)
        this.initEndpoint = dataDetails.endpoint
        this.offset = offset

        this.dataAccessPaths = dataDetails.data
        this.timestampAccessPath = timestampAccessPath
    }
}

module.exports = Metadata
