import { legacy_createStore as createStore, applyMiddleware } from "redux"
import rootReducer from "../reducers/index"
import { persistStore, persistReducer } from 'redux-persist';
//import storage from 'redux-persist/lib/storage'; //localstage
import storage from 'redux-persist/lib/storage/session';
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas/index'

const sagaMiddleware = createSagaMiddleware()
const persistconfig = {
    key: 'root',
    storage,
    //blacklist:['cart,'']
    whitelist: ['cart','users','meals', 'auth']
}
const persistedReducer = persistReducer(persistconfig, rootReducer)
const configStore = (initialValue) => {
    const store = createStore(rootReducer, initialValue, applyMiddleware(thunk, createLogger(), sagaMiddleware));
   
    const persistor = persistStore(store)   
    sagaMiddleware.run(rootSaga)
    return store
}
export default configStore;

