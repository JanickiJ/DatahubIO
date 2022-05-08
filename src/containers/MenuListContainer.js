import { connect } from "react-redux";
import MenuList from "../components/MenuList";
import { readConfigFile } from "../utils/config";
import { loadConfig } from "../actions/config";
import { setConfigLoaded } from "../actions/appInfo";

function mapStateToProps(state, ownProps) {}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onFileUpload: async (e) => {
      const fileContent = await readConfigFile(e);
      dispatch(loadConfig(fileContent, e.target.files[0].name));
      dispatch(setConfigLoaded(true));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuList);
