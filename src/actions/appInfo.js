import {SET_CURRENT_TAB, SET_CONFIG_LOADED} from './types'

export function setCurrentTab(currentTab) {
    return {
        type: SET_CURRENT_TAB,
        currentTab
    }
}

export function setConfigLoaded(configLoaded) {
    return {
        type: SET_CONFIG_LOADED,
        configLoaded
    }
}