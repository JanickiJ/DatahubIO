import { connect } from "react-redux";
import Navbar from "../components/Navbar";
import { readConfigFile } from "../utils/config";
import { loadConfig } from "../actions/config";
import { graphsSelector } from "../utils/selectors/config";
import { configNameSelector } from "../utils/selectors/config";

function mapStateToProps(state, ownProps) {
  console.log("In graph con");
  const graphs = graphsSelector(state);
  return {
    graphs: graphs,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onFileUpload: async (e) => {
      const fileContent = await readConfigFile(e);
      dispatch(loadConfig(fileContent.groups, e.target.files[0].name));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
