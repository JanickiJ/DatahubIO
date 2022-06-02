import { connect } from "react-redux";
import MenuList from "../components/MenuList";
import { readConfigFile } from "../utils/config";
import { setRefreshTimer, clearTimer, refresh, loadConfig } from "../actions/config";
import {
  setShowConfigLoaded,
  setConfigLoaded,
  setShowIndicateConfig,
  setShowLoadingConfig,
  setCurrentTab,
  toggleDateVisibility,
} from "../actions/appInfo";
import { checkVPN } from "../utils/DataLoader.js";
import store from "../store/store.js"

function mapStateToProps(state, ownProps) {
  const datesToggled = state.appInfo.datesToggled;
  return {
    datesToggled: datesToggled,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    toggleDate: (flag) => {
      dispatch(toggleDateVisibility(!flag));
    },
    checkVPN: checkVPN,
    onFileUpload: async (e) => {
      console.log(store.getState())

      await store.getState().config.dataLoading.waitForUnlock()
      dispatch(clearTimer());
      await store.getState().config.dataLoading.waitForUnlock()

      console.log(store.getState())

      dispatch(setShowIndicateConfig(false));
      dispatch(setShowLoadingConfig(true));
      let fileContent = await readConfigFile(e);


      console.log(fileContent)
      dispatch(loadConfig(fileContent, e.target.files[0].name));
      console.log(fileContent)

      console.log("started loading")
      // await refreshGroups(fileContent); // load data
      console.log(store.getState())
      await store.getState().config.dataLoading.waitForUnlock()
      dispatch(refresh())
      await store.getState().config.dataLoading.waitForUnlock()
      console.log("finished loading")

      dispatch(setCurrentTab(0));
      dispatch(setConfigLoaded(true));
      dispatch(setShowLoadingConfig(false));
      dispatch(setShowConfigLoaded(true));
      setTimeout(() => dispatch(setShowConfigLoaded(false)), 10000);




      dispatch(setRefreshTimer(setTimeout(async function r() {
        console.log("started refresh")
        console.log(store.getState())
        await store.getState().config.dataLoading.waitForUnlock()
        await dispatch(refresh())
        await store.getState().config.dataLoading.waitForUnlock()
        console.log("finished refresh")
        dispatch(setRefreshTimer(setTimeout(r, 10000))); // set timeout for next load
      }, 10000)
    ));



    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuList);
