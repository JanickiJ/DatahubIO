import {LOAD_CONFIG} from './types'

export function loadConfig(config, name) {
    return {
        type: LOAD_CONFIG,
        config,
        name
    }
}