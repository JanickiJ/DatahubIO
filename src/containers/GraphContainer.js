import { connect } from "react-redux";
import Graph from "../components/Graph";
import { graphsSelector } from "../utils/selectors/config";

function mapStateToProps(state, ownProps) {
  console.log("In graph con");
  console.log(state)
  console.log(state.appInfo.configLoaded)
  const graphs = graphsSelector(state);
  const currentTab = state.appInfo.currentTab;
  const configLoaded = state.appInfo.configLoaded;
  //console.log(state.appInfo.currentTab);
  //console.log(graphs[0].charts);
  //console.log(graphs[currentTab].charts);
  return {
    configLoaded: configLoaded,
    graphs: graphs[currentTab].charts,
    currentTab: currentTab,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Graph);
