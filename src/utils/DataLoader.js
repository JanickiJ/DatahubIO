import axios from 'axios'

function getNestedData(data, path) {
    if (path instanceof Array && path.length > 1)
        return getNestedData(data[path[0]], path.slice(1))
    return data[path[0]]
}

async function load(metadata) {

    let points = []


    let endpoint = metadata.initEndpoint.slice("https://datahub.ki.agh.edu.pl".length) + "/?format=json&limit=100&offset=0"
    //console.log(endpoint)

    await axios.get(endpoint, {
        headers:{
        },
    }).then((response) => {
        let json = response.data;

        //console.log(json);

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
    }).catch(e => {
        console.error(e);
    }).then();

    points.reverse();
    return points;
    // return new Promise((resolve) => {
    //     setTimeout(function () {
    //         resolve();
    //     }, 10000);
    // }).then(function () {
    //     return points;
    // });
}

class DataLoader {

    async loadData(chart) {
        let res = await load(chart.metadata)
        // console.log("RES", res);
        return res;


    }


}

export {DataLoader}
