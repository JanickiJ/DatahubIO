import {CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts"
import React from "react";
import PropTypes from 'prop-types';

function Plot({key, plotData}) {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
            <ResponsiveContainer width={1000} aspect={2.5}>
                <LineChart data={plotData.points}>
                    <YAxis/>
                    <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                    <XAxis dataKey={"timestamp"} hide={false}/>
                    <YAxis/>
                    {
                        Object.entries(plotData.charts).map(chart => {
                            return (<Line key={chart[0]} type="monotone" dataKey={"values." + chart[0]}
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
    plotData: PropTypes.string.isRequired
};

export default Plot