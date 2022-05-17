import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Title from "./Title";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { TextField } from "@mui/material";
import { Grid } from "@mui/material";


function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits({ chart }) {
  const [startValue, setStartValue] = React.useState(
    //new Date("2022-05-10T21:37:54")
    chart.viewingTimeInterval.getStart()
  );
  const [endValue, setEndValue] = React.useState(
    //new Date("2022-05-11T21:11:54")
    chart.viewingTimeInterval.getEnd()
  );

  const handleStartChange = (newValue) => {
    console.log(newValue)
    chart.viewingTimeInterval.startDate = new Date(newValue);
    setStartValue(newValue);
  };

  const handleEndChange = (newValue) => {
    console.log(newValue)
    chart.viewingTimeInterval.endDate = new Date(newValue);
    setEndValue(newValue);
  };

  return (
    <React.Fragment>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography component="p" variant="subtitle1">
              Ustaw datę początkową
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <DateTimePicker
              label="Date&Time picker"
              value={startValue}
              onChange={handleStartChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography component="p" variant="subtitle1">
              Ustaw datę końcową
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <DateTimePicker
              label="Date&Time picker"
              value={endValue}
              onChange={handleEndChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </Grid>
        </Grid>
      </LocalizationProvider>
    </React.Fragment>
  );
}
