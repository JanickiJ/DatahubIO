import React from "react";
import { BsArrowClockwise } from "react-icons/bs";

function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
          <label className="form-label" htmlFor="customFile"/>
          <input
            type="file"
            className="form-control"
            id="customFile"
            onChange={(e) => props.onFileUpload(e)}
          />
        </ul>
        <button className="btn btn-light">
          <BsArrowClockwise/>
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
