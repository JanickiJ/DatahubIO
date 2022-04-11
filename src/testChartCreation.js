const Metadata = require("./utils/Metadata");
const charts = require("./utils/Chart");
const mockedMetadata = require("./testMetadata")

let metadata = [mockedMetadata];
charts.createCharts(metadata).then((result) => {
    console.log(result)
});