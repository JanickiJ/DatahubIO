import {Metadata} from "./utils/Metadata"

const dd = `{
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

export const mockedMetadata = new Metadata(JSON.parse(dd), ["timestamp"], "2022-03-14T20:49:03+01:00", "PRESENT")
