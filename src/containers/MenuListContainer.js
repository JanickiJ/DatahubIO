import { connect } from "react-redux";
import MenuList from "../components/MenuList";
import { readConfigFile } from "../utils/config";
import { loadConfig } from "../actions/config";

function mapStateToProps(state, ownProps) {}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onFileUpload: async (e) => {
      const fileContent = await readConfigFile(e);
      console.log("File content:");
      console.log(fileContent);
      console.log("Name:");
      console.log(e.target.files[0].name);
      dispatch(loadConfig(fileContent, e.target.files[0].name));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuList);
