import {connect} from "react-redux";
import MenuList from "../components/MenuList";
import {readConfigFile} from "../utils/config";
import {loadConfig} from "../actions/config";
import {refreshGroups} from "../chart/chart";
import {setConfigIndicated,setConfigIsLoading, setCurrentTab} from "../actions/appInfo";
import {checkVPN} from "../utils/DataLoader.js";

function mapStateToProps(state, ownProps) {
    return {}
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onFileUpload: async (e) => {
            dispatch(setConfigIsLoading(true));
            dispatch(setConfigIndicated(true));
            let fileContent = await readConfigFile(e);
            dispatch(loadConfig(fileContent, e.target.files[0].name));
            await checkVPN();

            //console.log("started loading")
            await refreshGroups(fileContent);                                       // load data
            //console.log("finished loading")
            await dispatch(loadConfig(fileContent, e.target.files[0].name));
            dispatch(setConfigIsLoading(false));
            dispatch(setCurrentTab(0));

            let refreshTimer = setTimeout(() => async function refresh() {
                await refreshGroups(fileContent);                                   // refresh data
                await dispatch(loadConfig(fileContent, e.target.files[0].name));
                refreshTimer = setTimeout(() => refresh, 120000);                  // set timeout for next load
            }, 120000);

        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuList);
