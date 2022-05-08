import {SET_CURRENT_TAB, SET_CONFIG_LOADED} from '../actions/types'

const initialState = {
    currentTab: 0,
    configLoaded: false
}

export default function appInfoReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_TAB: {
            return {
                ...state,
                currentTab: action.currentTab
            }
        }
        case SET_CONFIG_LOADED: {
            return {
                ...state,
                configLoaded: action.configLoaded
            }
        }
        default:
            return state
    }
}