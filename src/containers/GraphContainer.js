import { connect } from "react-redux";
import Graph from "../components/Graph";
import { graphsSelector } from "../utils/selectors/config";

function mapStateToProps(state, ownProps) {
  const graphs = graphsSelector(state);
  const currentTab = state.appInfo.currentTab;
  const configLoaded = state.appInfo.configLoaded;
  const datesToggled = state.appInfo.datesToggled;
  return {
    configLoaded: configLoaded,
    graphs: graphs[currentTab].charts,
    currentTab: currentTab,
    datesToggled: datesToggled,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Graph);
