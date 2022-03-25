import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/navbar";
import Graphs from "./components/graphs";

class App extends Component {
  state = {
    graphs: [{ name: "Default-graph", data: "Default-graph-data" }],
  };

  parseConfigFile = (jsonData) => {
    let parsedJson = JSON.parse(jsonData);
    console.log(parsedJson);
    console.log(parsedJson.graphs[1]);
    const newGraphs = [];
    for (let i in parsedJson.graphs)
      newGraphs.push({
        name: parsedJson.graphs[i].name,
        data: parsedJson.graphs[i].data,
      });

    this.setState({ graphs: newGraphs });
  };

  onFileUpload = (e) => {
    const files = e.target.files;
    const reader = new FileReader();
    reader.readAsText(files[0]);
    reader.onload = (e) => {
      this.parseConfigFile(e.target.result);
    };
  };

  render() {
    return (
      <React.Fragment>
        <NavBar onFileUpload={this.onFileUpload}></NavBar>
        <Graphs graphs={this.state.graphs}></Graphs>
      </React.Fragment>
    );
  }
}

export default App;
