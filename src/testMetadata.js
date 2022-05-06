import {Metadata} from "./utils/Metadata"
import {Axis} from "./chart/axis";

const dd = `{
                "endpoint": "https://datahub.ki.agh.edu.pl/pl/datasets/env-mon-agh/endpoints/55/data/?format=json&limit=25&offset=25",
                "data": [
                    {
                        "name": "temperature set",
                        "axis": "left",  
                        "from": [
                            "data",
                            "heater",
                            "tempSet"
                        ]
                    },
                    {
                        "name": "temperature read",
                        "axis": "right",
                        "from": [
                            "data",
                            "heater",
                            "tempRead"
                        ]
                    }
                ]
            }`

export const mockedMetadata = new Metadata(
    JSON.parse(dd),
    ["timestamp"],
    "2022-03-14T20:49:03+01:00",
    "PRESENT",
    new Axis("µg/m3", 2),
    new Axis("kPa", 2),
    "Daty",
    "Stężenie CO2",
    "Ciśnienie"
)
