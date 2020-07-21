import { createStore, combineReducers } from "redux";
import mainPageReducers from "./mainPageReducers";
import {reducer as formReducer} from 'redux-form';
import loginReducer from "./loginReducers";

//бывший _state
let reducers = combineReducers({
    feeds: mainPageReducers,
    form: formReducer,
    login: loginReducer
});

let store = createStore(reducers);

window.store = store;
export default store;
