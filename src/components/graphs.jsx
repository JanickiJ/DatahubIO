import React from "react";
import Plot from "./plot";
import PropTypes from 'prop-types';

function Graphs({graphs, sortIntoGrid}) {
    const tempArray = graphs || [];
    const gridArray = sortIntoGrid(tempArray);
    return (
        <main className="container-fluid">
            {gridArray.map((graphs) => (
                <div className="row"
                     style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                    {graphs.map((graph) => (
                        <div className="col-xs-3">
                        <Plot key={graph.title} plotData={graph} width={1000} aspect={2.5}/>
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