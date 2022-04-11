import {CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts"
import React from "react";
import PropTypes from 'prop-types';

function Plot({key, chart, width, aspect}) {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <ResponsiveContainer width={width} aspect={aspect}>
                <LineChart data={chart.points}>
                    <YAxis/>
                    <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                    <XAxis dataKey={"timestamp"} hide={false}/>
                    <YAxis/>
                    {
                        Object.entries(chart.dataSeries).map(chart => {
                            return (<Line key={chart[0]}
                                          type="monotone"
                                          dataKey={"values." + chart[0]}
                                          stroke={chart[1].color}/>)
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