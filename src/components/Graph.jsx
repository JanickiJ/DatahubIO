import React from "react";
import Plot from "./Plot";
import PropTypes from "prop-types";
import { Container, Alert, AlertTitle, Grid, Paper } from "@mui/material";
import Deposits from "../components/Deposits";
import Start from "../components/Start";

function Graph({
  currentTab,
  graphs,
  sortIntoGrid,
  configIndicated,
  configIsLoading,
}) {
    if(!configIndicated || configIsLoading){
      return(<Start/>)
    }
    //I will need it
/*  if (!configIndicated) {
    return (
      <Alert severity="warning">
        <AlertTitle fontSize={25}>Uwaga</AlertTitle>
        Aby wyświetlić dane załaduj config korzystając z menu po lewej stronie
      </Alert>
    );
  }
  if (configIsLoading) {
    return (
      <Alert severity="info">
        <AlertTitle fontSize={25}>Informacja</AlertTitle>
        Plik konfiguracyjny się ładuje
      </Alert>
    );
  }*/
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
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
