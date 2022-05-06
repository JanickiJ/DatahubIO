import {CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Label} from "recharts"
import React from "react";
import PropTypes from 'prop-types';
import {AxisSide} from "../chart/axisSide";

function Plot({key, chart, width, aspect}) {

    const leftAxis = chart.metadata.leftAxis;
    const rightAxis = chart.metadata.rightAxis;
    const leftLabel = `${chart.metadata.yLeftLabel} [${leftAxis.unit}]`
    const rightLabel = `${chart.metadata.yRightLabel} [${rightAxis.unit}]`

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <ResponsiveContainer width={width} aspect={aspect}>
                <LineChart data={chart.data}>
                    <YAxis yAxisId={AxisSide.LEFT.value}
                           orientation={AxisSide.LEFT.value}>
                        <Label value={leftLabel} angle={-90}/>
                    </YAxis>
                    <YAxis yAxisId={AxisSide.RIGHT.value}
                           orientation={AxisSide.RIGHT.value}>
                        <Label value={rightLabel} angle={-90}/>
                    </YAxis>
                    <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                    <XAxis dataKey={"timestamp"} hide={false}/>
                    {
                        Object.entries(chart.dataSeries).map(dataSeries => {
                            const seriesName = dataSeries[0];
                            const seriesInfo = dataSeries[1];
                            const yAxisSide = seriesInfo.yAxisSide;
                            const axis = yAxisSide.value === AxisSide.LEFT.value ? leftAxis : rightAxis;
                            const unit = axis.unit
                            return (<Line key={seriesName}
                                          type="monotone"
                                          dataKey={"values." + seriesName}
                                          stroke={seriesInfo.color}
                                          yAxisId={yAxisSide.value}
                                          name={seriesName}
                                          unit={` ${unit}`}
                            />)
                        })
                    }
                    <Tooltip/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

Plot.propTypes = {
    key: PropTypes.string.isRequired,
    chart: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    aspect: PropTypes.number.isRequired
};

export default Plot