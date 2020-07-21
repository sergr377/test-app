import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    isAuth: false
};

const loginReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                isAuth: action.isAuth,
            }
        default: return state;
    }
}

export const authAC = (isAuth) => {
    console.log(isAuth)
    return { type: SET_USER_DATA, isAuth }
}

export default loginReducer
