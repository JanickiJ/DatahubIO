import {CLEAR_TIMER, REFRESH, SET_REFRESH_TIMER, CLEAR_MUTEX} from './types'

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

export  function clearMutex() {
    return {
        type: CLEAR_MUTEX
    }
}
