import React from "react";

function Graph(props) {
  return (
    <React.Fragment>
      <p>{props.name}</p>
      <img src="../logo512.png"></img>
      <p>{props.data}</p>
    </React.Fragment>
  );
}

export default Graph;
