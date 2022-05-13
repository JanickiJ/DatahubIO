import {SET_CURRENT_TAB, SET_CONFIG_INDICATED, SET_CONFIG_IS_LOADING, VPN_ENABLED} from '../actions/types'

const initialState = {
    currentTab: 0,
    configIndicated: false,
    configIsLoading: false,
    vpnEnabled: true
}

export default function appInfoReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_TAB: {
            return {
                ...state,
                currentTab: action.currentTab
            }
        }
        case SET_CONFIG_INDICATED: {
            return {
                ...state,
                configIndicated: action.configIndicated
            }
        }
        case SET_CONFIG_IS_LOADING: {
            return {
                ...state,
                configIsLoading: action.configIsLoading
            }
        }
        case VPN_ENABLED: {
            return {
                ...state,
                vpnEnabled: action.vpnEnabled
            }
        }
        default:
            return state
    }
}