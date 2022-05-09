import {connect} from "react-redux";
import MenuList from "../components/MenuList";
import {readConfigFile} from "../utils/config";
import {loadConfig} from "../actions/config";
import {setConfigIndicated,setConfigIsLoading, setCurrentTab} from "../actions/appInfo";

function mapStateToProps(state, ownProps) {
    return {}
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onFileUpload: async (e) => {
            dispatch(setConfigIsLoading(true));
            dispatch(setConfigIndicated(true));
            const fileContent = await readConfigFile(e);
            dispatch(loadConfig(fileContent, e.target.files[0].name));
            setTimeout(() => {
                dispatch(setConfigIsLoading(false));
                dispatch(setCurrentTab(0));
            }, 10000);
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuList);
