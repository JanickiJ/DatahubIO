import React from "react";
import {BsArrowClockwise} from "react-icons/bs";
import PropTypes from 'prop-types';

function Navbar({onFileUpload}) {
    return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                    <label className="form-label" htmlFor="customFile"/>
                    <input
                        type="file"
                        className="form-control"
                        id="customFile"
                        onChange={(e) => {
                            onFileUpload(e);
                        }}
                    />
                </ul>
                <button className="btn btn-light">
                    <BsArrowClockwise/>
                </button>
            </div>
        </nav>
    );
}

Navbar.propTypes = {
    onFileUpload: PropTypes.func.isRequired
};

export default Navbar;
