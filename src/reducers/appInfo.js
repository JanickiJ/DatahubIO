import {SET_CURRENT_TAB} from '../actions/types'

const initialState = {
    currentTab: 0
}

export default function appInfoReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_TAB: {
            return {
                currentTab: action.currentTab
            }
        }
        default:
            return state
    }
}