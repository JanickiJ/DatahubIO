import "./App.css";
import React from "react";
import NavBar from "./components/navbar";
import Graphs from "./components/graphs";
import { useState } from "react";

function App(props) {
  const [graphs, setGraphs] = useState([
    { name: "Default-graph", data: "Default-graph-data" },
  ]);

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
