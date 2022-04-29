import {render} from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import App from "./App";
import GraphContainer from "./containers/GraphContainer";
import {Box, Tabs, Input, Button} from '@mui/material';

const rootElement = document.getElementById("root");
console.log("In routes")
render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route path="graphs1" element={<GraphContainer/>}/>
                <Route path="graphs2" element={<Button variant="outlined">duddd</Button>}/>
                <Route path="graphs3" element={<Button variant="outlined">Outlined</Button>}/>
            </Route>
        </Routes>
    </BrowserRouter>,
    rootElement
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
