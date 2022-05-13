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

            let refreshTimer = setTimeout(async function refresh() {
                await refreshGroups(fileContent);                                   // load/refresh data
                await dispatch(loadConfig(fileContent, e.target.files[0].name));
                refreshTimer = setTimeout(refresh, 120000);                  // set timeout for next load
            }, 10000);

            // teraz chyba cos mozna pozmieniac, bo najpierw ładuja sie puste grafy, a potem dane sie dociagaja
            setTimeout(() => {
                dispatch(setConfigIsLoading(false));
                dispatch(setCurrentTab(0));
            }, 10000);
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuList);
