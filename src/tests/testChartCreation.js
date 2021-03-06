import {parseConfig} from '../utils/ConfigParser.js';
import {createGroups} from "../chart/group"
const config = `{
    "groups": [
      {
        "name": "group 1",
        "charts": [
          {
  
            "startDate": "2022-03-14T20:49:03+01:00",
  
            "endDate": "PRESENT",
  
            "chartType": "lineGraph",
  
            "title": "graph of temperature versus time",
  
            "xLabel": "date",
  
            "yLabel": "temperature from AGH/L09",
  
            "xUnit": "date time",
  
            "yUnit": "date time",
  
            "timestampsPath": [
              "timestamp"
            ],
  
            "dataDetails": {
  
              "endpoint": "https://datahub.ki.agh.edu.pl/pl/datasets/env-mon-agh/endpoints/55/data",
  
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
            },
  
  
            "extraData": [
              {
                "key": "value"
              },
              {
                "mean temperature": "16"
              }
            ]
          },
          {
  
            "startDate": "2022-03-14T20:49:03+01:00",
  
            "endDate": "PRESENT",
  
            "chartType": "lineGraph",
  
            "title": "graph of temperature versus time",
  
            "xLabel": "date",
  
            "yLabel": "temperature from AGH/L09",
  
            "xUnit": "date time",
  
            "yUnit": "date time",
  
            "timestampsPath": [
              "timestamp"
            ],
  
            "dataDetails": {
  
              "endpoint": "https://datahub.ki.agh.edu.pl/pl/datasets/env-mon-agh/endpoints/65/data",
  
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
            },
  
  
            "extraData": [
              {
                "key": "value"
              },
              {
                "mean temperature": "16"
              }
            ]
          },
          {
  
            "startDate": "2022-03-14T20:49:03+01:00",
  
            "endDate": "PRESENT",
  
            "chartType": "lineGraph",
  
            "title": "graph of temperature versus time",
  
            "xLabel": "date",
  
            "yLabel": "temperature from AGH/L09",
  
            "xUnit": "date time",
  
            "yUnit": "date time",
  
            "timestampsPath": [
              "timestamp"
            ],
  
            "dataDetails": {
  
              "endpoint": "https://datahub.ki.agh.edu.pl/pl/datasets/env-mon-agh/endpoints/55/data",
  
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
            },
  
  
            "extraData": [
              {
                "key": "value"
              },
              {
                "mean temperature": "16"
              }
            ]
          },
          {
  
            "startDate": "2022-03-14T20:49:03+01:00",
  
            "endDate": "PRESENT",
  
            "chartType": "lineGraph",
  
            "title": "graph of temperature versus time",
  
            "xLabel": "date",
  
            "yLabel": "temperature from AGH/L09",
  
            "xUnit": "date time",
  
            "yUnit": "date time",
  
            "timestampsPath": [
              "timestamp"
            ],
  
            "dataDetails": {
  
              "endpoint": "https://datahub.ki.agh.edu.pl/pl/datasets/env-mon-agh/endpoints/55/data",
  
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
            },
  
  
            "extraData": [
              {
                "key": "value"
              },
              {
                "mean temperature": "16"
              }
            ]
          },
          {
  
            "startDate": "2022-03-14T20:49:03+01:00",
  
            "endDate": "PRESENT",
  
            "chartType": "lineGraph",
  
            "title": "graph of temperature versus time",
  
            "xLabel": "date",
  
            "yLabel": "temperature from AGH/L09",
  
            "xUnit": "date time",
  
            "yUnit": "date time",
  
            "timestampsPath": [
              "timestamp"
            ],
  
            "dataDetails": {
  
              "endpoint": "https://datahub.ki.agh.edu.pl/pl/datasets/env-mon-agh/endpoints/55/data",
  
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
            },
  
  
            "extraData": [
              {
                "key": "value"
              },
              {
                "mean temperature": "16"
              }
            ]
          },
          {
  
            "startDate": "2022-03-14T20:49:03+01:00",
  
            "endDate": "PRESENT",
  
            "chartType": "lineGraph",
  
            "title": "graph of temperature versus time",
  
            "xLabel": "date",
  
            "yLabel": "temperature from AGH/L09",
  
            "xUnit": "date time",
  
            "yUnit": "date time",
  
            "timestampsPath": [
              "timestamp"
            ],
  
            "dataDetails": {
  
              "endpoint": "https://datahub.ki.agh.edu.pl/pl/datasets/env-mon-agh/endpoints/55/data",
  
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
            },
  
  
            "extraData": [
              {
                "key": "value"
              },
              {
                "mean temperature": "16"
              }
            ]
          },
          {
  
            "startDate": "2022-03-14T20:49:03+01:00",
  
            "endDate": "PRESENT",
  
            "chartType": "lineGraph",
  
            "title": "graph of temperature versus time",
  
            "xLabel": "date",
  
            "yLabel": "temperature from AGH/L09",
  
            "xUnit": "date time",
  
            "yUnit": "date time",
  
            "timestampsPath": [
              "timestamp"
            ],
  
            "dataDetails": {
  
              "endpoint": "https://datahub.ki.agh.edu.pl/pl/datasets/env-mon-agh/endpoints/55/data",
  
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
            },
  
  
            "extraData": [
              {
                "key": "value"
              },
              {
                "mean temperature": "16"
              }
            ]
          },
          {
  
            "startDate": "2022-03-14T20:49:03+01:00",
  
            "endDate": "PRESENT",
  
            "chartType": "lineGraph",
  
            "title": "graph of temperature versus time",
  
            "xLabel": "date",
  
            "yLabel": "temperature from AGH/L09",
  
            "xUnit": "date time",
  
            "yUnit": "date time",
  
            "timestampsPath": [
              "timestamp"
            ],
  
            "dataDetails": {
  
              "endpoint": "https://datahub.ki.agh.edu.pl/pl/datasets/env-mon-agh/endpoints/55/data",
  
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
            },
  
  
            "extraData": [
              {
                "key": "value"
              },
              {
                "mean temperature": "16"
              }
            ]
          },
          {
  
            "startDate": "2022-03-14T20:49:03+01:00",
  
            "endDate": "PRESENT",
  
            "chartType": "lineGraph",
  
            "title": "graph of temperature versus time",
  
            "xLabel": "date",
  
            "yLabel": "temperature from AGH/L09",
  
            "xUnit": "date time",
  
            "yUnit": "date time",
  
            "timestampsPath": [
              "timestamp"
            ],
  
            "dataDetails": {
  
              "endpoint": "https://datahub.ki.agh.edu.pl/pl/datasets/env-mon-agh/endpoints/55/data",
  
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
            },
  
  
            "extraData": [
              {
                "key": "value"
              },
              {
                "mean temperature": "16"
              }
            ]
          }
        ]
      },
      {
        "name": "group 2",
        "charts": [
          {
            "startDate": "2022-03-14T20:49:03+01:00",
  
            "endDate": "PRESENT",
  
            "chartType": "lineGraph",
  
            "title": "graph of temperature versus time",
  
            "xLabel": "date",
  
            "yLabel": "temperature from AGH/L09",
  
            "xUnit": "date time",
  
            "yUnit": "date time",
  
            "timestampsPath": [
              "timestamp"
            ],
  
            "dataDetails": {
  
              "endpoint": "https://datahub.ki.agh.edu.pl/pl/datasets/env-mon-agh/endpoints/55/data",
  
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
            },
  
  
            "extraData": [
              {
                "key": "value"
              },
              {
                "mean temperature": "16"
              }
            ]
          }
        ]
      }
    ]
  }`;

let metadata = parseConfig(config);
createGroups(metadata).forEach((result) => {
});
