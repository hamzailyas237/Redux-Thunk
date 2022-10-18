
import { combineReducers } from 'redux'
import { AddCounterReducer, SubtractCounterReducer } from './CounterReducer'

const CombineReducer = combineReducers({
    AddCounterReducer,
    SubtractCounterReducer
})
export default CombineReducer