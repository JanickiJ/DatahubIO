import {
  SET_SHOW_INDICATE_CONFIG,
  SET_SHOW_VPN_DISABLED,
  SET_SHOW_VPN_ENABLED,
  SET_SHOW_CONFIG_LOADED,
  SET_SHOW_CONFIG_LOADED_ERROR,
  SET_SHOW_CONFIG_IS_LOADING,
  SET_CURRENT_TAB,
  SET_CONFIG_LOADED,
  TOGGLE_DATES,
  SET_SHOW_INTERNET_CONNECTION_ERROR,
} from "../actions/types";

export function toggleDateVisibility(datesToggled) {
  return {
    type: TOGGLE_DATES,
    datesToggled,
  };
}

export function setCurrentTab(currentTab) {
  return {
    type: SET_CURRENT_TAB,
    currentTab,
  };
}

export function setConfigLoaded(configLoaded) {
  return {
    type: SET_CONFIG_LOADED,
    configLoaded,
  };
}

export function setShowLoadingConfig(showLoadingConfig) {
  return {
    type: SET_SHOW_CONFIG_IS_LOADING,
    showLoadingConfig,
  };
}

export function setShowIndicateConfig(showIndicateConfig) {
  return {
    type: SET_SHOW_INDICATE_CONFIG,
    showIndicateConfig,
  };
}

export function setShowConfigLoaded(showConfigLoaded) {
  return {
    type: SET_SHOW_CONFIG_LOADED,
    showConfigLoaded,
  };
}

export function setShowConfigLoadedError(showConfigLoadedError) {
  return {
    type: SET_SHOW_CONFIG_LOADED_ERROR,
    showConfigLoadedError,
  };
}

export function setShowVPNEnabled(showVPNEnabled) {
  return {
    type: SET_SHOW_VPN_ENABLED,
    showVPNEnabled,
  };
}

export function setShowVPNDisabled(showVPNDisabled) {
  return {
    type: SET_SHOW_VPN_DISABLED,
    showVPNDisabled,
  };
}

export function setShowInternetConnectionError(showInternetConnectionError) {
  return {
    type: SET_SHOW_INTERNET_CONNECTION_ERROR,
    showInternetConnectionError,
  };
}
