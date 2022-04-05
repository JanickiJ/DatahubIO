import "./App.css";
import React from "react";
import GraphsContainer from "./containers/GraphsContainer";
import NavbarContainer from "./containers/NavbarContainer";
import store from "./store/store"
import {Provider} from 'react-redux';
import {readConfigFile} from './utils/config'

function App() {
    //console.log("CON",readConfigFile('/home/kuba/code/datahubio/src/test-config.json'))
    return (
        <Provider store={store}>
            <React.Fragment>
                <NavbarContainer/>
                <GraphsContainer/>
            </React.Fragment>
        </Provider>
    );
}

export default App;
