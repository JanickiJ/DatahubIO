import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function CustomTabPanel({ configLoaded, graphs, changeTab }) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  console.log("in custom pasnel");
  console.log(configLoaded);
  if (!configLoaded) {
    return <Grid />;
  }

  const handleChange = (event, newValue) => {
    const index = parseInt(newValue.charAt(newValue.length - 1)) - 1;
    console.log("inside handle change");
    console.log(index);
    changeTab(index);
    setValue(index);
  };
  console.log(graphs);

  return (
    <Box sx={{ width: 500 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="inherit"
        variant="fullWidth"
        aria-label="full width tabs example"
      >
        {/* <Tab label="Item One" value="/group1" {...a11yProps(0)} />
        <Tab label="Item Two" value="/group2" {...a11yProps(1)} />
        <Tab label="Item Three" value="/group3" {...a11yProps(2)} /> */}
        {graphs.map((group, i) => (
          <Tab label={group.name} value={"/group" + (i + 1)} />
        ))}
      </Tabs>
    </Box>
  );
}

CustomTabPanel.propTypes = {
  graphs: PropTypes.array.isRequired,
};
