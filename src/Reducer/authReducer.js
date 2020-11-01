import {
    AUTH_LOADING,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
    USER_NOT_FOUND,
    AUTH_SYSTEM_ERROR,
    COOKIE_CHECKED
} from "../Action/types"



const INITIAL_STATE = {username: "", email: "", error: "", loading: false}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case USER_LOGIN_SUCCESS :
            return {...INITIAL_STATE, ...action.payload}
        case AUTH_SYSTEM_ERROR:
            return {...INITIAL_STATE, error: action.payload}
        case USER_NOT_FOUND:
            return {...INITIAL_STATE, error: action.payload}
        case AUTH_LOADING:
            return {...INITIAL_STATE, loading:true}
        default:
            return state
    }
}