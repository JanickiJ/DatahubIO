export async function readConfigFile(e) {
    const files = e.target.files;
    const fileString = await loadFile(files[0])
    return parseConfigFile(fileString);
}

function parseConfigFile(jsonData) {
    let parsedJson = JSON.parse(jsonData);
    const newGraphs = [];
    for (let i in parsedJson.graphs)
        newGraphs.push({
            name: parsedJson.graphs[i].name,
            data: parsedJson.graphs[i].data,
        });

    return newGraphs;
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