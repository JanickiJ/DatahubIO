import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function CustomTabPanel({ configLoaded, graphs, changeTab, currentTab }) {
  const [value, setValue] = React.useState(currentTab);
  if (!configLoaded) {
    return <Grid />;
  }

  const handleChange = (event, newValue) => {
    changeTab(newValue);
    setValue(newValue);
  };

  return (
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="inherit"
        variant="scrollable"
        aria-label="full width tabs example"
      >
        {graphs.map((group, i) => (
          <Tab label={group.name} value={i} {...a11yProps(i)} />
        ))}
      </Tabs>
  );
}

CustomTabPanel.propTypes = {
  graphs: PropTypes.array.isRequired,
};
