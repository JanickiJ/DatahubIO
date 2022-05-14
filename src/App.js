import "./App.css";
import React from "react";
import store, { persistor } from "./store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import DashboardContainer from "./containers/DashboardContainer";
import NotificationContainer from './containers/NotificationContainer'
// //<PersistGate loading={null} persistor={persistor}> wyjebany cashing na czas developowania
function App() {
  return (
    <Provider store={store}>
        <React.Fragment>
          <DashboardContainer />
            <NotificationContainer/>
        </React.Fragment>
    </Provider>
  );
}

export default App;
