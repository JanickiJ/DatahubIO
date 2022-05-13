import { connect } from "react-redux";
import Graph from "../components/Graph";
import { graphsSelector } from "../utils/selectors/config";

function mapStateToProps(state, ownProps) {
  const graphs = graphsSelector(state);
  const currentTab = state.appInfo.currentTab;
  const configIsLoading = state.appInfo.configIsLoading;
  const configIndicated = state.appInfo.configIndicated;
  console.log("state");
  console.log(state);
  return {
    configIsLoading: configIsLoading,
    configIndicated: configIndicated,
    graphs: graphs[currentTab].charts,
    currentTab: currentTab,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Graph);
