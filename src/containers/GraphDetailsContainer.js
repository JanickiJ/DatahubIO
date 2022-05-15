import { connect } from "react-redux";
import GraphDetails from "../components/GraphDetails";

function mapStateToProps(state, ownProps) {
  console.log("inside con");
  const datesToggled = state.appInfo.datesToggled;
  console.log(state.appInfo.datesVisibility);
  return {
    datesToggled: datesToggled,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(GraphDetails);
