import {CLEAR_TIMER, LOAD_CONFIG, REFRESH, SET_REFRESH_TIMER} from '../actions/types'
import {mockedChart} from "../chart/mockedChart"
import {refreshGroups} from "../chart/chart";
import { Mutex } from 'async-mutex';

const initialState = {
    graphs: [mockedChart(), mockedChart(), mockedChart()],
    name: "",
    dataLoading: new Mutex(),
    refreshTimer: null,
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
        case SET_REFRESH_TIMER: {
            return {
                ...state,
                refreshTimer: action.refreshTimer,
            };
        }
        case CLEAR_TIMER: {
            // state.dataLoading.take( () => {
            //     clearTimeout(state.refreshTimer)
            //     state.dataLoading.leave()
            // })
            state.dataLoading.runExclusive(() => {
                    clearTimeout(state.refreshTimer)
                }).then(() => {
                return {
                    ...state
                };
            })
            // return {
            //     ...state
            // };
        }
        case REFRESH: {
            state.dataLoading.runExclusive(async () => {
                await refreshGroups(state.graphs)
            }).then(() => {
                return {
                    ...state
                };
            })
        }
        default:
            return state
    }
}

