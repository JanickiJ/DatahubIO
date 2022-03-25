import React, { Component } from "react";

class Graph extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <p>{this.props.name}</p>
        <img src="../logo512.png"></img>
        <p>{this.props.data}</p>
      </React.Fragment>
    );
  }
}

export default Graph;
