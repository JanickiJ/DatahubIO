import {parseConfig} from "./ConfigParser.js";
import {createGroups} from "../chart/group.js";

export async function readConfigFile(e) {
  const files = e.target.files;
  const fileString = await loadFile(files[0]);
  const metadata = parseConfig(fileString);
  return await createGroups(metadata);
}

async function loadFile(file) {
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     let fileReader = new FileReader();
    //     fileReader.onload = (e) => resolve(fileReader.result);
    //     fileReader.readAsText(file);
    //   }, 3000);
    // });

    return new Promise((resolve) => {
        let fileReader = new FileReader();
        fileReader.onload = (e) => resolve(fileReader.result);
        fileReader.readAsText(file);
    });
}
