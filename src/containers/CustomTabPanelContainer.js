import { connect } from "react-redux";
import CustomTabPanel from "../components/CustomTabPanel";
import { readConfigFile } from "../utils/config";
import { loadConfig } from "../actions/config";
import { configNameSelector } from "../utils/selectors/config";
import { graphsSelector } from "../utils/selectors/config";
import {setCurrentTab} from  "../actions/appInfo";

function mapStateToProps(state, ownProps) {
  const graphs = graphsSelector(state);
  const configLoaded = state.appInfo.configLoaded;
  return {
    graphs: graphs,
    configLoaded: configLoaded  
  };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        changeTab: (tab) => {
            dispatch(setCurrentTab(tab));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomTabPanel);
