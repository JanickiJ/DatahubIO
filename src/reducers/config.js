import {LOAD_CONFIG} from '../actions/types'

const initialState = {
    graphs: [{name: "Default", data: "Default"}]
}

export default function configReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_CONFIG: {
            return {
                graphs:action.config
            }
        }
        default:
            return state
    }
}