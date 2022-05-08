import {combineReducers} from 'redux';
import configReducer from './config'
import appInfoReducer from './appInfo'

const rootReducer = combineReducers({
    config: configReducer,
    appInfo: appInfoReducer
})

export default rootReducer