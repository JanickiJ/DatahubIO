import React from "react";
import Plot from "./Plot";

function Graphs(props) {
  const sortIntoGrid = (array, chunk = 3) => {
    let result = [];
    for (let i = 0; i < array.length; i += chunk)
      result.push(array.slice(i, i + chunk));
    return result;
  };

  const tempArray = props.graphs || [];
  const gridArray = sortIntoGrid(tempArray, 3);
  console.log(gridArray);
  return (
    <main className="container-fluid">
      {gridArray.map((graphs) => (
        <div className="row"
             style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
          {graphs.map((graph) => (
            <div className="col-xs-3">
              <Plot key={graph.title} plotData={graph}/>
            </div>
          ))}
        </div>
      ))}
    </main>
  );
}

export default Graphs;
