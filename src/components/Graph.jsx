import React from "react";
import Plot from "./Plot";
import PropTypes from "prop-types";
import { Container, Grid, Paper } from "@mui/material";
import Deposits from "../components/Deposits";

function Graph({ graphs, sortIntoGrid }) {
  //tutaj w arg przekazac index grupy i zamiast graphs:
  //graphs = graphs[index].charts
  //dla testu mozna dac graphs = graphs[0].charts i powinno dzialac obecnie
  var first_group = graphs[0].charts;
  console.log("inside composnent:");
  console.log(first_group);
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      {first_group.map((graph) => (
        <Grid container spacing={3} sx={{ m: 1 }}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper
              sx={{
                p: 3,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Plot key={graph.title} chart={graph} aspect={2.5} />
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
      ))}
    </Container>
  );
}

Graph.propTypes = {
  graphs: PropTypes.array.isRequired,
};

export default Graph;
