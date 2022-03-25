import React, { Component } from "react";
import { BsArrowClockwise } from "react-icons/bs";

class NavBar extends Component {
  state = {};

  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <label className="form-label" htmlFor="customFile"></label>
            <input
              type="file"
              className="form-control"
              id="customFile"
              onChange={(e) => this.props.onFileUpload(e)}
            />
          </ul>
          <button className="btn btn-light">
            <BsArrowClockwise></BsArrowClockwise>
          </button>
        </div>
      </nav>
    );
  }
}

export default NavBar;
