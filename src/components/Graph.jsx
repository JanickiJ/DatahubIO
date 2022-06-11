import React from "react";
import Plot from "./Plot";
import PropTypes from "prop-types";
import { Container, Alert, AlertTitle, Grid, Paper } from "@mui/material";
import Start from "../components/Start";
import GraphDetails from "./GraphDetails.js";
import Deposits from "./Deposits.js";
import Typography from "@mui/material/Typography";

function Graph({
  currentTab,
  graphs,
  name,
  sortIntoGrid,
  configLoaded,
  datesToggled,
}) {
  if (!configLoaded) {
    return <Start />;
  }
  console.log(graphs);

  return (
    
    <Container maxWidth="false" sx={{ mt: 1, mb: 1 }}>
      {graphs.map((graph) => (
        <Grid container spacing={3} sx={{ m: 1 }}>
          <Grid item xs={12} md={8} lg={datesToggled ? 12 : 9}>
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
          {!datesToggled && (
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
                  p: 3,
                  mt: 3,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Deposits chart = {graph}/>
              </Paper>
            </Grid>
          )}
        </Grid>
      ))}
    </Container>
  );
}

Graph.propTypes = {
  graphs: PropTypes.array.isRequired,
};

export default Graph;
