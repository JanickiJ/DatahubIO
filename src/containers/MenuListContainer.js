import { connect } from "react-redux";
import MenuList from "../components/MenuList";
import { readConfigFile } from "../utils/config";
import { loadConfig } from "../actions/config";
import { refreshGroups } from "../chart/chart";
import {
  setShowConfigLoaded,
  setConfigLoaded,
  setShowIndicateConfig,
  setShowLoadingConfig,
  setCurrentTab,
} from "../actions/appInfo";
import { checkVPN } from "../utils/DataLoader.js";

function mapStateToProps(state, ownProps) {
  return {};
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    checkVPN: checkVPN,
    onFileUpload: async (e) => {
      dispatch(setShowIndicateConfig(false));
      dispatch(setShowLoadingConfig(true));
      let fileContent = await readConfigFile(e);
      dispatch(loadConfig(fileContent, e.target.files[0].name));

      //console.log("started loading")
      await refreshGroups(fileContent); // load data
      //console.log("finished loading")
      await dispatch(loadConfig(fileContent, e.target.files[0].name));
      dispatch(setCurrentTab(0));
      dispatch(setConfigLoaded(true));
      dispatch(setShowLoadingConfig(false));
      dispatch(setShowConfigLoaded(true));
      setTimeout(() => dispatch(setShowConfigLoaded(false)), 10000);

      let refreshTimer = setTimeout(async function refresh() {
        //                console.log("refreshuje")
        await refreshGroups(fileContent); // refresh data
        await dispatch(loadConfig(fileContent, e.target.files[0].name));
        refreshTimer = setTimeout(refresh, 10000); // set timeout for next load
      }, 10000);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuList);
