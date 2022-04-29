import "./App.css";
import React from "react";
import NavbarContainer from "./containers/NavbarContainer";
import Demo from "./components/AppBar";
import store, {persistor} from "./store/store"
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react'
import Dashboard from './components/Dashboard'


function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <React.Fragment>
                    <Dashboard/>
                </React.Fragment>
            </PersistGate>
        </Provider>
    );
}

export default App;
