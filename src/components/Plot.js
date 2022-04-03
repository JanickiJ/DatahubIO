import {LineChart, Line, XAxis, ResponsiveContainer, YAxis, Tooltip, CartesianGrid} from "recharts"

export default function Plot({plotData}) {
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