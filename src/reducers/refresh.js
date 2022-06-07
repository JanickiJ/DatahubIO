import
{CLEAR_TIMER,CLEAR_MUTEX, REFRESH, RESET_APP, SET_REFRESH_TIMER} from '../actions/types'
import {refreshGroups} from "../chart/chart";
import { Mutex } from 'async-mutex';
import store from "../store/store"
import {loadConfig} from "../actions/config";

const initialState = {
    dataLoading: new Mutex(),
    refreshTimer: null,
}

export default function refreshReducer(state = initialState, action) {
    switch (action.type) {
        case CLEAR_MUTEX: {
            return {
                ...state,
                dataLoading: new Mutex()
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

            }).catch((e)=>{console.log("AAAAAAAAasdAAAAAAAAAAAAA");console.log(e)})
             return state;
        }
        case REFRESH: {
            state.dataLoading.runExclusive(async () => {
                var res = await refreshGroups(store.getState().config.graphs); // load data
                store.dispatch(loadConfig(res, store.getState().config.name));
            }).then(() => {
                return state;
            }).catch((e)=>{console.log("AAAAAAAAAAsAAAAAAAAAAA");
            console.log(e)})
        }
        default:
            return state
    }
}

