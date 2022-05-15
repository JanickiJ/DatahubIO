import {
  SET_SHOW_INDICATE_CONFIG,
  SET_SHOW_VPN_DISABLED,
  SET_SHOW_VPN_ENABLED,
  SET_SHOW_CONFIG_LOADED,
  SET_SHOW_CONFIG_IS_LOADING,
  SET_CURRENT_TAB,
  SET_CONFIG_LOADED,
  SET_DATES_VISIBILITY,
} from "../actions/types";

export function setDatesVisibility(datesVisibility) {
  return {
    type: SET_DATES_VISIBILITY,
    datesVisibility,
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
