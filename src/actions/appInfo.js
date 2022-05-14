import {SET_CURRENT_TAB, SET_CONFIG_INDICATED, SET_CONFIG_IS_LOADING, VPN_ENABLED} from './types'

export function setCurrentTab(currentTab) {
    return {
        type: SET_CURRENT_TAB,
        currentTab
    }
}

export function setConfigIndicated(configIndicated) {
    return {
        type: SET_CONFIG_INDICATED,
        configIndicated
    }
}

export function setConfigIsLoading(configIsLoading) {
    return {
        type: SET_CONFIG_IS_LOADING,
        configIsLoading
    }
}

export function vpnEnabled(vpnEnabled) {
    return {
        type: VPN_ENABLED,
        vpnEnabled
    }
}