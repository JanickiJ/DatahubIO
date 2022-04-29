import {CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts"
import React from "react";
import PropTypes from 'prop-types';
import {AxisSide} from "../chart/axisSide";

function Plot({key, chart, width, aspect}) {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <ResponsiveContainer width={width} aspect={aspect}>
                <LineChart data={chart.data}>
                    <YAxis yAxisId={AxisSide.LEFT.value} orientation={AxisSide.LEFT.value}/>
                    <YAxis yAxisId={AxisSide.RIGHT.value} orientation={AxisSide.RIGHT.value}/>
                    <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                    <XAxis dataKey={"timestamp"} hide={false}/>
                    {
                        Object.entries(chart.dataSeries).map(dataSeries => {
                            const seriesName = dataSeries[0]
                            const seriesInfo = dataSeries[1]
                            return (<Line key={seriesName}
                                          type="monotone"
                                          dataKey={"values." + seriesName}
                                          stroke={seriesInfo.color}
                                          yAxisId={seriesInfo.yAxisSide.value}
                                          name={seriesName}
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