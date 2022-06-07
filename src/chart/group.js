import async from "async";
import {createCharts, refreshCharts} from "./chart";

export class Group {
    name;
    description;
    charts;

    constructor(name, description, charts) {
        this.name = name;
        this.description = description;
        this.charts = charts;
    }
}

// Now creates empty charts
export function createGroups(groupsMetadataList) {
    return groupsMetadataList.map(group => new Group(group[0], group[1], createCharts(group[2])));
}

export async function refreshGroups(groups) {
    const tasks = groups.map(group => cb => refreshCharts(group).then(() => cb()))
    await async.parallel(tasks);
    return groups
}
