import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import GraphContainer from "./containers/GraphContainer";
import { Box, Tabs, Input, Button } from "@mui/material";
import { graphsSelector } from "./utils/selectors/config";

const rootElement = document.getElementById("root");
const maxTabs = 10;

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/group1" element={<App />}></Route>
      <Route path="/group2" element={<App />}></Route>
      <Route path="/group3" element={<App />}></Route>
      <Route path="/group4" element={<App />}></Route>
      <Route path="/group5" element={<App />}></Route>
      <Route path="/group6" element={<App />}></Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
