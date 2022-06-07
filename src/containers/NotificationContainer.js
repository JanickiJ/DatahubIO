import {connect} from "react-redux";
import Notification from '../components/Notification'
import {setShowInternetConnectionError} from "../actions/appInfo"
function mapStateToProps(state, ownProps) {
    const showIndicateConfig = state.appInfo.showIndicateConfig;
    const showLoadingConfig = state.appInfo.showLoadingConfig;
    const showConfigLoaded = state.appInfo.showConfigLoaded;
    const showVPNEnabled = state.appInfo.showVPNEnabled;
    const showVPNDisabled = state.appInfo.showVPNDisabled;
    const showConfigLoadedError = state.appInfo.showConfigLoadedError;
    const showInternetConnectionError = state.appInfo.showInternetConnectionError;
    const showLoadingData = state.appInfo.showLoadingData;
    return {
        showIndicateConfig: showIndicateConfig,
        showLoadingConfig: showLoadingConfig,
        showConfigLoaded: showConfigLoaded,
        showVPNEnabled: showVPNEnabled,
        showVPNDisabled: showVPNDisabled,
        showConfigLoadedError: showConfigLoadedError,
        showInternetConnectionError: showInternetConnectionError,
        showLoadingData: showLoadingData
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    const setShowInternetConnectionErrorProp = (flag) => {
        dispatch(setShowInternetConnectionError(flag))
    }
    return {
        setShowInternetConnectionError: setShowInternetConnectionErrorProp
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
