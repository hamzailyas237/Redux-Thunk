

import CombineReducer from "./reducers/CombineReducer";
import {createStore, applyMiddleware} from 'redux'
import thunk from "redux-thunk";

const store = createStore(CombineReducer, applyMiddleware(thunk));
export default store