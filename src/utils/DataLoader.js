import axios from 'axios'
import async from 'async'

function getNestedData(data, path) {
    if (path instanceof Array && path.length > 1)
        return getNestedData(data[path[0]], path.slice(1))
    return data[path[0]]
}

async function load(metadata, offset=0) {

    let points = []

    let endpoint = metadata.initEndpoint.slice("https://datahub.ki.agh.edu.pl".length) +
        "/?format=json&limit=100&offset=" + offset
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
}


function merge(A, B){
    let i = 0;
    let j = 0;
    let C = [];
    while(i < A.length && j < B.length) {
        if(new Date(A[i]['timestamp'])>=new Date(B[j])) {
            C.push(A[i]);
            i++;
        }
        else {
            C.push(B[j]);
            j++;
        }
    }
    while(i<A.length) {
        C.push(A[i]);
        i++;
    }
    while(j<B.length) {
        C.push(B[j]);
        j++;
    }
    return C;
}

class DataLoader {

    async loadDataTo(chart, offset, dateTo) {
        let res = [];
        while(true) {
            let batch = await load(chart.metadata, offset)
            res = merge(res, batch)
            offset += batch.length
            if(new Date(batch[batch.length-1]['timestamp']) > dateTo){
                console.log("GO GO GO");
            } else {
                break;
            }
        }
        return res;
    }

    // latest data is on the right-hand side. To be sure
    async loadLatestData(chart) {
        let dateTo = null;
        if(chart.data.length > 0) {
            dateTo = chart.data[0].timestamp
        } else {
            dateTo = chart.metadata.timeInterval.getStart()
        }
        return await this.loadDataTo(chart, 0, dateTo);
    }

    async loadEarliestData(chart) {
        if(chart.data.length > 0) {
            let dateTo = chart.metadata.timeInterval.getStart();
            let offset = chart.data.lenght
            return await this.loadDataTo(chart, offset, dateTo);
        }
        return []
    }

    async loadInitData(chart) {
        return await this.loadLatestData(chart)
    }


    async refreshData(chart) {
        return merge(await this.loadLatestData(chart), await this.loadEarliestData(chart))
    }

}

export {DataLoader, merge}
