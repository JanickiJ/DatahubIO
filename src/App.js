import "./App.css";
import React from "react";
import GraphsContainer from "./containers/GraphsContainer";
import NavbarContainer from "./containers/NavbarContainer";
import store, {persistor} from "./store/store"
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react'


function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <React.Fragment>
                    <NavbarContainer/>
                    <GraphsContainer/>
                </React.Fragment>
            </PersistGate>
        </Provider>
    );
}

export default App;
