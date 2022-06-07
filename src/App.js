import "./App.css";
import React from "react";
import store, {persistor} from "./store/store";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import DashboardContainer from "./containers/DashboardContainer";
import NotificationContainer from './containers/NotificationContainer'

function App() {
    //jak sie zjebie to odkomentuj i kliknij reload
    // persistor.purge()
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <React.Fragment>
                    <DashboardContainer/>
                    <NotificationContainer/>
                </React.Fragment>
            </PersistGate>
        </Provider>
    );
}

export default App;
