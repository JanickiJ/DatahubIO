import React from "react";
import Plot from "./plot";
import PropTypes from 'prop-types';

function Graphs({graphs,sortIntoGrid}) {
  const tempArray = graphs || [];
  const gridArray = sortIntoGrid(tempArray);
  return (
    <main className="container-fluid">
      {gridArray.map((graphs) => (
        <div className="row">
          {graphs.map((graph) => (
              <div className="row"
                   style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                <Plot key={graph.title} plotData={graph}/>
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