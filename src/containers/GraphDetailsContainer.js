import { connect } from "react-redux";
import GraphDetails from "../components/GraphDetails";

function mapStateToProps(state, ownProps) {
  console.log("inside con");
  const datesVisibility = state.appInfo.showDatesVisibility;
  console.log(state.appInfo.showDatesVisibility);
  return {
    datesVisibility: datesVisibility,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(GraphDetails);
