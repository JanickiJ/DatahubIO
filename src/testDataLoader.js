const Metadata = require("./utils/Metadata");
const DataLoader = require("./utils/DataLoader");
let dd = `{
                "endpoint": "https://datahub.ki.agh.edu.pl/pl/datasets/env-mon-agh/endpoints/55/data/?format=json&limit=25&offset=25",
                "data": [
                    {
                        "name": "temperature set",  
                        "from": [
                            "data",
                            "heater",
                            "tempSet"
                        ]
                    },
                    {
                        "name": "temperature read",
                        "from": [
                            "data",
                            "heater",
                            "tempRead"
                        ]
                    }
                ]
            }`

let mm = new Metadata(JSON.parse(dd), ["timestamp"], "2022-03-14T20:49:03+01:00", "PRESENT")
let dl = new DataLoader();
dl.loadData(mm).then((result) => {
    console.log(result)
})
