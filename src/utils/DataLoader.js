// const https = require('https')
// import * as https from "https"
import axios from 'axios'

function getNestedData(data, path) {
    if (path instanceof Array && path.length > 1)
        return getNestedData(data[path[0]], path.slice(1))
    return data[path[0]]
}

async function load(metadata) {

    let points = []

    axios.get(metadata.initEndpoint).then(res => {

    // })
    // https.get(metadata.initEndpoint, (res) => {
        let body = "";

        res.on("data", (chunk) => {
            body += chunk;
        });

        res.on("end", () => {
            try {
                let json = JSON.parse(body);

                for (const dataPoint of json["results"]) {
                    let timestamp = getNestedData(dataPoint, metadata.timestampAccessPath);
                    let values = {}
                    for (const data of metadata.dataAccessPaths) {
                        values[data["name"]] = getNestedData(dataPoint, data["from"])
                    }

                    points.push({
                        "timestamp": timestamp,
                        "values": values
                    });
                }
            } catch (error) {
                console.error(error.message);
            }
        });


    }).on('error', (e) => {
        console.error(e);
    });

    return new Promise((resolve) => {
        setTimeout(function() {
            resolve();
        }, 1000);
    }).then(function() {
        return points;
    });

}

class DataLoader{

    async loadData(metadata){
        return await load(metadata);
    }


}

export {DataLoader}
