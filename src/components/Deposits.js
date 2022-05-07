import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Title from "./Title";

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Cos tam</Title>
      <Typography component="p" variant="h4">
        Cos tam
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        Cos tam
      </Typography>
      <div>
        <Link
          color="primary"
          href="https://www.youtube.com/watch?v=UjLluCCnR2o"
          onClick={preventDefault}
        >
          Cos nie cos potrafie
        </Link>
      </div>
    </React.Fragment>
  );
}
