import { connect } from "react-redux";
import Graph from "../components/Graph";
import { graphsSelector } from "../utils/selectors/config";

function mapStateToProps(state, ownProps) {
  console.log("In graph con");
  console.log(state)
  console.log(graphs[0].charts)
  console.log(state.currentTab)
  const graphs = graphsSelector(state);
  const currentTab = state.currentTab;
  return {
    //graphs: graphs[0].charts, <- to nie dziala nw czmeu
    graphs: graphs[currentTab].charts,
    currentTab: currentTab
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Graph);
