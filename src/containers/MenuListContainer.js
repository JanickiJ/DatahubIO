import {connect} from "react-redux";
import MenuList from "../components/MenuList";
import {readConfigFile} from "../utils/config";
import {loadConfig} from "../actions/config";
import {refreshGroups} from "../chart/chart";
import {setConfigIndicated,setConfigIsLoading, setCurrentTab} from "../actions/appInfo";

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

            // działa chyba. jak sie odpali big config to niektore wykresy po jakims czasie powinny sie pojawic. pozniej tez jakies console log ze refresh
            let displayTimer = setTimeout(function refreshTimer() {
                refreshGroups(fileContent);
                dispatch(loadConfig(fileContent, e.target.files[0].name));
                displayTimer = setTimeout(refreshTimer, 20000);
            }, 10000);


            setTimeout(() => {
                dispatch(setConfigIsLoading(false));
                dispatch(setCurrentTab(0));
            }, 10000);
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuList);
