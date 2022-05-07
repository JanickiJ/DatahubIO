import { parseConfig } from "./ConfigParser.js";
import { createGroups, ChartContainer } from "../chart/chart.js";

export async function readConfigFile(e) {
  const files = e.target.files;
  const fileString = await loadFile(files[0]);
  const metadata = parseConfig(fileString);
  const charts = await createGroups(metadata);
  console.log("readConfigFile returns:");
  console.log(charts);
  return charts;
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
