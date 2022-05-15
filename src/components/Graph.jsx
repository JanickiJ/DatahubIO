import React from "react";
import Plot from "./Plot";
import PropTypes from "prop-types";
import { Container, Alert, AlertTitle, Grid, Paper } from "@mui/material";
import Start from "../components/Start";
import GraphDetails from "./GraphDetails.js";
import Deposits from "./Deposits.js";

function Graph({
  currentTab,
  graphs,
  sortIntoGrid,
  configLoaded,
  datesToggled,
}) {
  if (!configLoaded) {
    return <Start />;
  }

  return (
    <Container maxWidth="false" sx={{ mt: 4, mb: 4 }}>
      {graphs.map((graph) => (
        <Grid container spacing={3} sx={{ m: 1 }}>
          <Grid item xs={12} md={8} lg={9}>
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
            <Paper
              sx={{
                visibility: datesToggled ? "hidden" : "block",
                p: 3,
                mt: 3,
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
