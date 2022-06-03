import {createStore} from 'redux'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from '../reducers/reducers'

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer);

export const persistor = persistStore(store);
export default store;

// removed data caching for easier development
/*
const store = createStore(rootReducer);
export default store;
*/
