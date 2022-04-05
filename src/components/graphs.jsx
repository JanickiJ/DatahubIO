import React from "react";
import Graph from "./graph";
import PropTypes from 'prop-types';

function Graphs({graphs,sortIntoGrid}) {
  const tempArray = graphs || [];
  const gridArray = sortIntoGrid(tempArray);
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

Graphs.propTypes = {
  graphs: PropTypes.array.isRequired,
  sortIntoGrid: PropTypes.func.isRequired
};

export default Graphs