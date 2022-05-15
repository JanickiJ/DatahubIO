import {
  SET_SHOW_INDICATE_CONFIG,
  SET_SHOW_VPN_DISABLED,
  SET_SHOW_VPN_ENABLED,
  SET_SHOW_CONFIG_LOADED,
  SET_SHOW_CONFIG_IS_LOADING,
  SET_CURRENT_TAB,
  SET_CONFIG_LOADED,
  TOGGLE_DATES,
} from "../actions/types";

const initialState = {
  currentTab: 0,
  configLoaded: false,
  showIndicateConfig: true,
  showLoadingConfig: false,
  showConfigLoaded: false,
  showVPNEnabled: false,
  showVPNDisabled: false,
  datesToggled: true,
};

export default function appInfoReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_DATES: {
      return {
        ...state,
        datesToggled: action.datesToggled,
      };
    }
    case SET_CURRENT_TAB: {
      return {
        ...state,
        currentTab: action.currentTab,
      };
    }
    case SET_SHOW_CONFIG_IS_LOADING: {
      return {
        ...state,
        showLoadingConfig: action.showLoadingConfig,
      };
    }
    case SET_SHOW_INDICATE_CONFIG: {
      return {
        ...state,
        showIndicateConfig: action.showIndicateConfig,
      };
    }
    case SET_SHOW_CONFIG_LOADED: {
      return {
        ...state,
        showConfigLoaded: action.showConfigLoaded,
      };
    }
    case SET_SHOW_VPN_ENABLED: {
      return {
        ...state,
        showVPNEnabled: action.showVPNEnabled,
      };
    }
    case SET_SHOW_VPN_DISABLED: {
      return {
        ...state,
        showVPNDisabled: action.showVPNDisabled,
      };
    }
    case SET_CONFIG_LOADED: {
      return {
        ...state,
        configLoaded: action.configLoaded,
      };
    }
    default:
      return state;
  }
}
