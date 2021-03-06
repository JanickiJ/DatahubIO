import {CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Label} from "recharts"
import React from "react";
import PropTypes from 'prop-types';
import {AxisSide} from "../chart/axisSide";
import {Box, Typography} from '@mui/material';
import {isIn} from "../utils/TimeInterval.js"

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

const calculateValuesDomain = (chart, axisSide) => {
  let domainMin = Number.MAX_VALUE
  let domainMax = Number.MIN_VALUE
  chart.data.forEach(t => {
    Object.entries(t.values).forEach(v => {
      const seriesName = v[0]
      if (chart.dataSeries[seriesName].yAxisSide.value === axisSide.value) {
        domainMin = Math.min(domainMin, v[1]);
        domainMax = Math.max(domainMax, v[1]);
      }
    })
  })

  return [domainMin-10, domainMax+10];
}

const calculateTicks = (chart, axisSide) => {
  const valuesDomain = calculateValuesDomain(chart, axisSide)
  const tickGap = (valuesDomain[1] - valuesDomain[0]) / 10
  const ticks = []
  for (let tick = valuesDomain[0]; tick <= valuesDomain[1]; tick += tickGap) {
    ticks.push(tick.toFixed(2));
  }
  return ticks;
}


function Plot({key, chart}) {

  const leftAxis = chart.metadata.leftAxis;
  const rightAxis = chart.metadata.rightAxis;
  const leftLabel = createAxisLabel(chart, leftAxis)
  const rightLabel = createAxisLabel(chart, rightAxis)

  const displayData = chart.data.filter(v => isIn(chart.viewingTimeInterval, new Date(v.timestamp)))
  displayData.forEach(v => v.timestamp = formatDateTime(new Date(v.timestamp)))


  return (
    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
      <Typography display={'flex'} component="p" variant="h6" padding={1}>{chart.metadata.title}</Typography>
      <Box width={"99%"}>
        <ResponsiveContainer width="99%" height={450}>
          <LineChart data={displayData} margin={{top: 5, right: 5, left: 50, bottom: 100}}>
            <YAxis yAxisId={AxisSide.LEFT.value}
                   orientation={AxisSide.LEFT.value}
                   domain={calculateValuesDomain(chart, AxisSide.LEFT)}
                   ticks={calculateTicks(chart, AxisSide.LEFT)}
                   interval={"preserveStart"}
            >
              <Label value={leftLabel} angle={-90} dx={-25}/>
            </YAxis>
            <YAxis yAxisId={AxisSide.RIGHT.value}
                   orientation={AxisSide.RIGHT.value}
                   domain={calculateValuesDomain(chart, AxisSide.RIGHT)}
                   ticks={calculateTicks(chart, AxisSide.RIGHT)}
                   interval={"preserveStart"}
            >
              <Label value={rightLabel} angle={-90} dx={25}/>
            </YAxis>
            <CartesianGrid stroke='#91a7bd' strokeDasharray="4"/>
            <XAxis dataKey={"timestamp"} interval={Math.floor(displayData.length / 20)} angle={-40} textAnchor={"end"}
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
