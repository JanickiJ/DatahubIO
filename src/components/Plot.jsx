import {CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Label} from "recharts"
import React from "react";
import PropTypes from 'prop-types';
import {AxisSide} from "../chart/axisSide";
import {Box, Typography} from '@mui/material';

const createAxisLabel = (chart, axis) => {
  const labelName = chart.metadata.yLeftLabel ?? "";
  const labelUnit = axis.unit !== "" ? "[" + axis.unit + "]" : "";
  return labelName + " " + labelUnit;
}

const formatDateTime = (datetime) => {
  const withLeadingZeros = (value) => {
    return ('0' + value).slice(-2)
  }
  return [
    withLeadingZeros(datetime.getMonth() + 1),
    withLeadingZeros(datetime.getDate()),
    withLeadingZeros(datetime.getFullYear())].join('-') + ' ' + [
    withLeadingZeros(datetime.getHours()),
    withLeadingZeros(datetime.getMinutes()),
    withLeadingZeros(datetime.getSeconds())].join(':');
}


function Plot({key, chart}) {

  const leftAxis = chart.metadata.leftAxis;
  const rightAxis = chart.metadata.rightAxis;
  const leftLabel = createAxisLabel(chart, leftAxis)
  const rightLabel = createAxisLabel(chart, rightAxis)

  chart.data.forEach(v => v.timestamp = formatDateTime(new Date(v.timestamp)))

  return (
    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
      <Typography display={'flex'} component="p" variant="h6" padding={1}>{chart.metadata.title}</Typography>
      <Box width={"99%"}>
        <ResponsiveContainer width="99%" height={450}>
          <LineChart data={chart.data} margin={{top: 5, right: 5, left: 50, bottom: 100}}>
            <YAxis yAxisId={AxisSide.LEFT.value}
                   orientation={AxisSide.LEFT.value}>
              <Label value={leftLabel} angle={-90} dx={-20}/>
            </YAxis>
            <YAxis yAxisId={AxisSide.RIGHT.value}
                   orientation={AxisSide.RIGHT.value}>
              <Label value={rightLabel} angle={-90}/>
            </YAxis>
            <CartesianGrid stroke='#91a7bd' strokeDasharray="4"/>
            <XAxis dataKey={"timestamp"} interval={Math.floor(chart.data.length / 20)} angle={-40} textAnchor={"end"}
                   hide={false}/>
            {
              Object.entries(chart.dataSeries).map(dataSeries => {
                const seriesName = dataSeries[0];
                const seriesInfo = dataSeries[1];
                const yAxisSide = seriesInfo.yAxisSide;
                const axis = yAxisSide.value === AxisSide.LEFT.value ? leftAxis : rightAxis;
                const unit = axis.unit
                return <Line key={seriesName}
                             type="monotone"
                             dataKey={"values." + seriesName}
                             stroke={seriesInfo.color}
                             yAxisId={yAxisSide.value}
                             name={seriesName}
                             unit={` ${unit}`}
                />
              })
            }
            <Tooltip/>
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Box>);
}

Plot.propTypes = {
  key: PropTypes.string.isRequired,
  chart: PropTypes.string.isRequired,
};

export default Plot
