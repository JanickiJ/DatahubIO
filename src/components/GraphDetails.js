import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Title from "./Title";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { TextField } from "@mui/material";
import { Grid } from "@mui/material";
import { TableContainer } from "@mui/material";
import { TableCell } from "@mui/material";
import { TableHead } from "@mui/material";
import { TableRow } from "@mui/material";
import { Table } from "@mui/material";
import { TableBody } from "@mui/material";

function preventDefault(event) {
  event.preventDefault();
}

const generateRows = (chart) => {
  let keys = Object.keys(chart.dataSeries);
  var resultRows = [];
  for (let i = 0; i < keys.length; i++) {
    var row = new Object();
    row.dataSeries = keys[i].charAt(0).toUpperCase() + keys[i].slice(1);
    row.color = chart.dataSeries[keys[i]].color;
    if (chart.data.length != 0)
      row.value = chart.data[chart.data.length - 1].values[keys[i]];
    resultRows.push(row);
  }
  return resultRows;
};

export default function GraphDetails({ chart }) {
  const rows = generateRows(chart);
  return (
    <React.Fragment>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Seria danych</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Kolor</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Wartość</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.dataSeries}>
                <TableCell>{row.dataSeries}</TableCell>
                <TableCell sx={{ backgroundColor: row.color }}></TableCell>
                <TableCell>{row.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
}
