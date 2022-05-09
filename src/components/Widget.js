import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Title from "./Title";
import { Container } from "@mui/material";
import { Paper } from "@mui/material";

function preventDefault(event) {
  event.preventDefault();
}

export default function Widget() {
  return (
    <Container
      maxWidth={false}
      sx={{
        p: 2,
      }}
    >
      <Paper
        sx={{
          p: 10,
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <React.Fragment>
          <Typography component="p" variant="h4">
            Cos tam
          </Typography>
          <Typography component="p" variant="h4">
            Cos tam
          </Typography>
          <Typography component="p" variant="h4">
            Cos tam
          </Typography>
          <Typography component="p" variant="h4">
            Cos tam
          </Typography>
        </React.Fragment>
      </Paper>
    </Container>
  );
}
