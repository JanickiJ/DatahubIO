import {LOAD_CONFIG} from '../actions/types'
import {mockedPlotData} from "../utils/mockedData"

const initialState = {
    graphs: [mockedPlotData(), mockedPlotData(), mockedPlotData()]
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