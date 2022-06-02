import {CLEAR_TIMER, LOAD_CONFIG, REFRESH, SET_REFRESH_TIMER} from './types'

export function loadConfig(config, name) {
    return {
        type: LOAD_CONFIG,
        config,
        name
    }
}

export  function refresh() {
    return {
        type: REFRESH
    }
}

export  function setRefreshTimer(refreshTimer) {
    return {
        type: SET_REFRESH_TIMER,
        refreshTimer,
    }
}

export  function clearTimer() {
    return {
        type: CLEAR_TIMER
    }
}