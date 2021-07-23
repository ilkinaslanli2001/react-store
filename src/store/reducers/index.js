import {combineReducers} from 'redux'
import {simpleReducer} from './simpleReducer'
import {basketReducer} from "./basketReducer";

export default combineReducers({
    simpleReducer,
    basketReducer
})