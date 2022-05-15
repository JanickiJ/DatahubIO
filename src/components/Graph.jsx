import React from "react";
import Plot from "./Plot";
import PropTypes from "prop-types";
import { Container, Alert, AlertTitle, Grid, Paper } from "@mui/material";
import GraphDetails from "./GraphDetails.js";
import Deposits from "./Deposits";

function Graph({
  currentTab,
  graphs,
  sortIntoGrid,
  configLoaded,
  datesToggled,
}) {
  if (!configLoaded) {
    return <Grid></Grid>;
  }

  return (
    <Container maxWidth="false" sx={{ mt: 4, mb: 4 }}>
      {graphs.map((graph) => (
        <Grid container spacing={3} sx={{ m: 1 }}>
          <Grid item xs={12} md={3} lg={3}>
            <Paper
              sx={{
                p: 3,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <GraphDetails chart={graph} configLoaded={configLoaded} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={8} lg={datesToggled ? 9 : 7}>
            <Paper
              sx={{
                p: 3,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Plot key={graph.title} chart={graph} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={2} lg={2}>
            <Paper
              sx={{
                visibility: datesToggled ? "hidden" : "block",
                p: 3,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Deposits />
            </Paper>
          </Grid>
        </Grid>
      ))}
    </Container>
  );
}

Graph.propTypes = {
  graphs: PropTypes.array.isRequired,
};

export default Graph;
