import { connect } from "react-redux";
import Dashboard from "../components/Dashboard";

function mapStateToProps(state, ownProps) {
  const configLoaded = state.appInfo.configLoaded;
  console.log(state);
  return {
    configLoaded: configLoaded,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
