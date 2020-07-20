import { createStore, combineReducers } from "redux";
import mainPageReducers from "./mainPageReducers";
import {reducer as formReducer} from 'redux-form';

//бывший _state
let reducers = combineReducers({
    feeds: mainPageReducers,
    form: formReducer
});

let store = createStore(reducers);

window.store = store;
export default store;
