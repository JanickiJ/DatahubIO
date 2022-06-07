import {createStore,applyMiddleware} from 'redux'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from '../reducers/reducers'
import { createLogger } from 'redux-logger'

const logger = createLogger({
    diff: true,
    collapsed: true
});

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ["refresh"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer,  applyMiddleware(logger));

export const persistor = persistStore(store);
export default store;

// removed data caching for easier development
/*
const store = createStore(rootReducer);
export default store;
*/
