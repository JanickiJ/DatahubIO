import {LOAD_CONFIG, REFRESH, SET_REFRESH_TIMER, CLEAR_MUTEX} from './types'

export function loadConfig(config, name) {
    return {
        type: LOAD_CONFIG,
        config,
        name
    }
}
