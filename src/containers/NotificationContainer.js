import {connect} from "react-redux";
import Notification from '../components/Notification'

function mapStateToProps(state, ownProps) {
    const showIndicateConfig = state.appInfo.showIndicateConfig;
    const showLoadingConfig = state.appInfo.showLoadingConfig;
    const showConfigLoaded = state.appInfo.showConfigLoaded;
    const showVPNEnabled = state.appInfo.showVPNEnabled;
    const showVPNDisabled = state.appInfo.showVPNDisabled;
    const showConfigLoadedError = state.appInfo.showConfigLoadedError;
    return {
        showIndicateConfig: showIndicateConfig,
        showLoadingConfig: showLoadingConfig,
        showConfigLoaded: showConfigLoaded,
        showVPNEnabled: showVPNEnabled,
        showVPNDisabled: showVPNDisabled,
        showConfigLoadedError: showConfigLoadedError
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
