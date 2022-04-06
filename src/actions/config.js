import {LOAD_CONFIG} from './types'

export function loadConfig(config) {
    return {
        type: LOAD_CONFIG,
        config
    }
}