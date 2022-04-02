import React from "react";
import Graph from "./graph";

function Graphs(props) {
  const sortIntoGrid = (array, chunk = 3) => {
    let result = [];
    let i;
    for (i = 0; i < array.length; i += chunk)
      result.push(array.slice(i, i + chunk));
    return result;
  };

  const tempArray = props.graphs || [];
  const gridArray = sortIntoGrid(tempArray, 3);
  console.log(gridArray);
  return (
    <main className="container-fluid">
      {gridArray.map((graphs) => (
        <div className="row">
          {graphs.map((graph) => (
            <div className="col-xs-3">
              <Graph name={graph.name} data={graph.data}/>
            </div>
          ))}
        </div>
      ))}
    </main>
  );
}

export default Graphs;
