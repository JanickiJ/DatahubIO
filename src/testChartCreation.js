const Metadata = require("./utils/Metadata");
const charts = require("./utils/Chart");
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

let metadata = [new Metadata(JSON.parse(dd), ["timestamp"], "2022-03-14T20:49:03+01:00", "PRESENT")];
charts.createCharts(metadata).then((result) => {
    console.log(result)
});