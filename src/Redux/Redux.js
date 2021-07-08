import AuthReducer from "./Reducers/AuthReducer"
import {applyMiddleware, combineReducers, createStore} from "redux"
import thunk from 'redux-thunk'

const reducers = combineReducers({AuthReducer})
const store = createStore(reducers, applyMiddleware(thunk))
window.store = store

export default store