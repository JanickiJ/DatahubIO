import "./App.css";
import React from "react";
import NavBar from "./components/navbar";
import Graphs from "./components/graphs";
import {useState} from "react";
import {mockedPlotData} from "./mockedData"

function App() {
  const [graphs, setGraphs] = useState([mockedPlotData(), mockedPlotData(), mockedPlotData()]);

  const parseConfigFile = (jsonData) => {
    let parsedJson = JSON.parse(jsonData);
    console.log(parsedJson);
    console.log(parsedJson.graphs[1]);
    const newGraphs = [];
    for (let i in parsedJson.graphs)
      newGraphs.push({
        name: parsedJson.graphs[i].name,
        data: parsedJson.graphs[i].data,
      });

    setGraphs(newGraphs);
  };

  const onFileUpload = (e) => {
    const files = e.target.files;
    const reader = new FileReader();
    reader.readAsText(files[0]);
    reader.onload = (e) => {
      parseConfigFile(e.target.result);
    };
  };

  return (
    <React.Fragment>
      <NavBar onFileUpload={onFileUpload}/>
      <Graphs graphs={graphs}/>
    </React.Fragment>
  );
}

export default App;
