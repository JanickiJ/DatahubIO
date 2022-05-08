import { connect } from "react-redux";
import CustomTabPanel from "../components/CustomTabPanel";
import { readConfigFile } from "../utils/config";
import { loadConfig } from "../actions/config";
import { configNameSelector } from "../utils/selectors/config";
import { graphsSelector } from "../utils/selectors/config";

function mapStateToProps(state, ownProps) {
  const graphs = graphsSelector(state);
  return {
    graphs: graphs,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomTabPanel);
