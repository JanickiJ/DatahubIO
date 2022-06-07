import {combineReducers} from 'redux';
import configReducer from './config'
import appInfoReducer from './appInfo'
import refreshReducer from './refresh'

const rootReducer = (state,action) => {
    if (action.type === "RESET_STATE"){
        state = undefined;
    }
    const reducers = combineReducers({
        config: configReducer,
        appInfo: appInfoReducer,
        refresh: refreshReducer,
    })
    return reducers(state,action);
}

export default rootReducer
