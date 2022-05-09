const Metadata = require("./utils/Metadata");
const DataLoader = require("./utils/DataLoader");
const mm = require("./testMetadata")

let dl = new DataLoader();
dl.loadData(mm).then((result) => {
    console.log(result)
})
