import
{LOAD_CONFIG} from '../actions/types'
import {mockedChart} from "../chart/mockedChart"

const initialState = {
    graphs: [mockedChart(), mockedChart(), mockedChart()],
    name: "",
}

export default function configReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_CONFIG: {
            return {
                ...state,
                graphs: action.config,
                name: action.name,
            }
        }
        default:
            return state
    }
}

