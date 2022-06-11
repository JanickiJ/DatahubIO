import "./App.css";
import React, {useEffect} from "react";
import store, {persistor} from "./store/store";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import DashboardContainer from "./containers/DashboardContainer";
import NotificationContainer from './containers/NotificationContainer'
import {refresh, setRefreshTimer} from "./actions/refresh";
import {setShowConfigLoaded} from "./actions/appInfo";

function App() {
  // jak sie zjebie to odkomentuj i kliknij reload
  // persistor.purge()
  useEffect(() => {
    store.dispatch(setRefreshTimer(setTimeout(async function r() {
        if (store.getState().appInfo.configLoaded) {
          console.log("started refresh")
          await store.getState().refresh.dataLoading.waitForUnlock()
          store.dispatch(refresh())
          await store.getState().refresh.dataLoading.waitForUnlock()
          console.log("finished refresh")
          store.dispatch(setRefreshTimer(setTimeout(r, 180000))); // set timeout for next load
        }
      }, 10000)
    ));
  })

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
