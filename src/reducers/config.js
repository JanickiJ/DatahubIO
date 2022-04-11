import {LOAD_CONFIG} from '../actions/types'
import {mockedChart} from "../utils/mockedChart"

const initialState = {
    graphs: [mockedChart(), mockedChart(), mockedChart()]
}

export default function configReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_CONFIG: {
            return {
                graphs: action.config
            }
        }
        default:
            return state
    }
}