import React from "react";
import PropTypes from 'prop-types';

function Graph({data,name}) {
  return (
    <React.Fragment>
      <p>{name}</p>
      <img src="../logo512.png"></img>
      <p>{data}</p>
    </React.Fragment>
  );
}

Graph.propTypes = {
    name: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired
};

export default Graph