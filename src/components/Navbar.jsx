import React, { useEffect } from "react";
import { BsArrowClockwise } from "react-icons/bs";
import PropTypes from "prop-types";
import { Box, Tabs, Input, Button, Menu, MenuItem } from "@mui/material";
import { TabContext, TabPanel, TabList } from "@mui/lab";
import Tab from "@material-ui/core/Tab";
import ReactDOM from "react-dom";
import { Switch, Route, Link, BrowserRouter, Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar({ onFileUpload, tabs }) {
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    console.log(newValue);
    console.log(event);
    navigate(newValue);
  };
  return (
    <>
      <Box sx={{ borderBottom: 2, borderColor: "divider" }}>
        <Tabs
          value="gra2ph1"
          textColor="secondary"
          indicatorColor="secondary"
          variant="scrollable"
          scrollButtons="auto"
          onChange={handleChange}
          aria-label="scrollable auto tabs example"
        >
          <Tab label="graph1" value="/group1" />
          <Tab label="graph2" value="/group2" />
        </Tabs>
      </Box>
      <Button
        variant="contained"
        component="label"
        onChange={(e) => {
          onFileUpload(e);
        }}
      >
        Upload File
        <input type="file" hidden />
      </Button>
    </>
  );
}

Navbar.propTypes = {
  onFileUpload: PropTypes.func.isRequired,
};

export default Navbar;
