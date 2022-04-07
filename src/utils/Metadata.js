const TimeInterval = require("./TimeInterval.js");

class Metadata {
    timeInterval;
    initEndpoint;
    lastEndpoint;
    dataAccessPaths = [];
    timestampAccessPath = []


    constructor(dataDetails, timestampAccessPath, startDate, endDate) {
        this.timeInterval = new TimeInterval(startDate, endDate)
        this.initEndpoint = dataDetails.endpoint
        this.lastEndpoint = this.initEndpoint

        this.dataAccessPaths = dataDetails.data
        this.timestampAccessPath = timestampAccessPath
    }
}

module.exports = Metadata

