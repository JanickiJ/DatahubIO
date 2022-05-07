import React from "react";
import Plot from "./Plot";
import PropTypes from "prop-types";
import { Container, Grid, Paper } from "@mui/material";
import Deposits from "../components/Deposits";

function Graph({ graphs, sortIntoGrid }) {
  console.log("inside component:");
  console.log(graphs[0].charts[0]);
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      {graphs.map((graph) =>
        graph.charts.map((xd) => (
          <Grid container spacing={3} sx={{ m: 1 }}>
            <Grid item xs={12} md={8} lg={9}>
              <Paper
                sx={{
                  p: 3,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Plot key={xd.title} chart={xd} aspect={2.5} />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper
                sx={{
                  p: 3,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Deposits />
              </Paper>
            </Grid>
          </Grid>
        ))
      )}
    </Container>
  );
}

Graph.propTypes = {
  graphs: PropTypes.array.isRequired,
};

export default Graph;
