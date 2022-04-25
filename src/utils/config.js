import {parseConfig} from "./ConfigParser"
import {createCharts, ChartContainer} from "../chart/chart";

export async function readConfigFile(e) {
    const files = e.target.files;
    const fileString = await loadFile(files[0])
    const metadata = parseConfig(fileString)
    const charts = await createCharts(metadata);
    const cc = new ChartContainer(charts)
    return cc;
}

function loadFile(file) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let fileReader = new FileReader();
            fileReader.onload = (e) => resolve(fileReader.result);
            fileReader.readAsText(file);
        }, 3000);
    });
}