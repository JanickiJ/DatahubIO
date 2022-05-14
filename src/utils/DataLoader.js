import axios from 'axios'
import store from "../store/store.js";
import {vpnEnabled} from "../actions/appInfo.js";

function getNestedData(data, path) {
    if (path instanceof Array && path.length > 1)
        return getNestedData(data[path[0]], path.slice(1))
    return data[path[0]]
}

export async function checkVPN(){
    //console.log("checking vpn")
    await axios.get("/pl", {
        headers:{
        },
    }).then((response) => {
        store.dispatch(vpnEnabled(true));
    //    console.log("dziala")
    }).catch(error => {
        if (error.response) { // In case of other errors doesn't change
            if(error.response.status === 403){
                store.dispatch(vpnEnabled(false));
    //           console.log("nie dziala")
            }
        }
    }).then();
}

async function load(metadata, offset=0) {

    let points = []

    // cuts 'proxy prefix' from endpoint
    let endpoint = metadata.initEndpoint.slice("https://datahub.ki.agh.edu.pl".length) +
        "/?format=json&limit=100&offset=" + offset

    await axios.get(endpoint, {
        headers:{
        },
    }).then((response) => {
        let json = response.data;
        store.dispatch(vpnEnabled(true));

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
    }).catch(error => {
        if (error.response) {
            // 403 Request forbidden by administrative rules. Most likely no VPN
            if(error.response.status === 403){
                store.dispatch(vpnEnabled(false));
            }
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            console.log(error.request);
        }
        return [];
    }).then();

    points.reverse();
    return points;
}

// Merges two sorted arrays into one. Key is timestamp attribute
function merge(A, B){
    let i = 0;
    let j = 0;
    let C = [];
    while(i < A.length && j < B.length) {
        if(new Date(A[i]['timestamp']) < new Date(B[j]['timestamp'])) {
            C.push(A[i]);
            i++;
        } else if(new Date(A[i]['timestamp']) > new Date(B[j]['timestamp'])){
            C.push(B[j]);
            j++;
        } else {
            C.push(A[i]);
            i++;
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

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

class DataLoader {

    // Starts at offset. Stop condition is meeting specified date
    async loadDataTo(chart, offset, dateTo) {
        let res = [];
        while(true) {
           // console.log("load batch")
            let batch = await load(chart.metadata, offset)
            offset += batch.length
            res = merge(res, batch)

            if(batch.length > 0 && new Date(batch[batch.length-1]['timestamp']) <= dateTo){
                break;
            } else if(batch.length == 0){
                await sleep(5000);
            }
        }
        return res;
    }

    // latest data is on the right-hand side. To be sure
    async loadLatestData(chart) {
        let dateTo = null;
        if(chart.data.length > 0) {
            dateTo = chart.data[chart.data.length-1].timestamp
        } else {
            dateTo = chart.metadata.timeInterval.getStart()
        }
        return await this.loadDataTo(chart, 0, dateTo);
    }

    // latest data is on the left-hand side. To be sure
    async loadEarliestData(chart) {
        if(chart.data.length > 0) {
            let dateTo = chart.metadata.timeInterval.getStart();
            let offset = chart.data.length
            return await this.loadDataTo(chart, offset, dateTo);
        }
        return []
    }


    async refreshData(chart) {
        return merge(await this.loadLatestData(chart), await this.loadEarliestData(chart))
    }

}

export {DataLoader, merge}
