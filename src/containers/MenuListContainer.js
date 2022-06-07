import {connect} from "react-redux";
import MenuList from "../components/MenuList";
import {readConfigFile} from "../utils/config";
import {loadConfig} from "../actions/config";
import {
    setShowConfigLoaded,
    setConfigLoaded,
    setShowIndicateConfig,
    setShowLoadingConfig,
    setCurrentTab,
    toggleDateVisibility,
    setShowConfigLoadedError,
} from "../actions/appInfo";
import {checkVPN} from "../utils/DataLoader.js";
import store, {persistor} from "../store/store.js"
import {clearTimer, refresh, setRefreshTimer} from "../actions/refresh";

function mapStateToProps(state, ownProps) {
    const datesToggled = state.appInfo.datesToggled;
    return {
        datesToggled: datesToggled,
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    const resetAppProp = () => {
        dispatch({type: "RESET_STATE"})
        persistor.purge()
    }
    return {
        toggleDate: (flag) => {
            dispatch(toggleDateVisibility(!flag));
        },
        resetApp: resetAppProp,
        checkVPN: checkVPN,
        onFileUpload: async (e) => {
            await readConfigFile(e).then(async (fileContent) => {
                await store.getState().refresh.dataLoading.waitForUnlock()
                dispatch(clearTimer());
                await store.getState().refresh.dataLoading.waitForUnlock()

                dispatch(setShowIndicateConfig(false));
                dispatch(setShowLoadingConfig(true));
                dispatch(setShowConfigLoadedError(false));

                dispatch(loadConfig(fileContent, e.target.files[0].name));
                await store.getState().refresh.dataLoading.waitForUnlock()
                dispatch(refresh())
                await store.getState().refresh.dataLoading.waitForUnlock()
                console.log("finished loadding")

                dispatch(setCurrentTab(0));
                dispatch(setConfigLoaded(true));
                dispatch(setShowLoadingConfig(false));
                dispatch(setShowConfigLoaded(true));
                setTimeout(() => dispatch(setShowConfigLoaded(false)), 10000);
                // store.dispatch(setRefreshTimer(setTimeout(async function r() {
                //         console.log("started refresh")
                //         await store.getState().refresh.dataLoading.waitForUnlock()
                //         store.dispatch(refresh())
                //         await store.getState().refresh.dataLoading.waitForUnlock()
                //         console.log("finished refresh")
                //         store.dispatch(setRefreshTimer(setTimeout(r, 10000))); // set timeout for next load
                //     }, 10000)
                // ));
            }).catch((e)=>{
                console.log("e");
                console.log(e);
                dispatch(setShowConfigLoadedError(true));
                setTimeout(() => dispatch(setShowConfigLoadedError(false)), 10000);
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuList);
