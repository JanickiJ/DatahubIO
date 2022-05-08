import { connect } from "react-redux";
import Graph from "../components/Graph";
import { graphsSelector } from "../utils/selectors/config";

function mapStateToProps(state, ownProps) {
  console.log("In graph con");
  const graphs = graphsSelector(state);
  return {
    //graphs: graphs[0].charts, <- to nie dziala nw czmeu
    graphs: graphs,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Graph);
