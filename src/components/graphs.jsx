import React, { Component } from "react";
import Graph from "./graph";

class Graphs extends Component {
  state = {};

  sortIntoGrid = (array, chunk = 3) => {
    let result = [];
    let i = 0;
    for (i = 0; i < array.length; i += chunk)
      result.push(array.slice(i, i + chunk));
    return result;
  };

  render() {
    const tempArray = this.props.graphs || [];
    const gridArray = this.sortIntoGrid(tempArray, 3);
    console.log(gridArray);
    return (
      <main className="container-fluid">
        {gridArray.map((graphs) => (
          <div className="row">
            {graphs.map((graph) => (
              <div className="col-xs-3">
                <Graph name={graph.name} data={graph.data}></Graph>
              </div>
            ))}
          </div>
        ))}
      </main>
    );
  }
}

export default Graphs;
