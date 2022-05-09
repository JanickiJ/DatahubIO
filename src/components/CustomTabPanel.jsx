import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function CustomTabPanel({
  configisLoading,
  configIndicated,
  graphs,
  changeTab,
}) {
  const [value, setValue] = React.useState("/group1");
  if (!configIndicated || configisLoading) {
    return <Grid />;
  }

  const handleChange = (event, newValue) => {
    const index = parseInt(newValue.charAt(newValue.length - 1)) - 1;
    changeTab(index);
    setValue(newValue);
  };

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
        {graphs.map((group, i) => (
          <Tab
            label={group.name}
            value={"/group" + (i + 1)}
            {...a11yProps(i)}
          />
        ))}
      </Tabs>
    </Box>
  );
}

CustomTabPanel.propTypes = {
  graphs: PropTypes.array.isRequired,
};
