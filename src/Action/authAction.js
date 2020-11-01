import axios from "axios"
import {API_URL} from "../supports/api-url/api-url"
import {
AUTH_LOADING,
AUTH_SYSTEM_ERROR,
USER_NOT_FOUND,
USER_LOGIN_SUCCESS,
USER_LOGOUT,
COOKIE_CHECKED
} from './types'

export const onUserLogin = ({
    username,
    password
}) => {
    console.log(username)
    return (dispatch) => {
        dispatch({
            type: AUTH_LOADING 
        })
        loginStart (dispatch, username, password)
    }
}

var loginStart = (dispatch, username, password) => {
    axios.get(API_URL+"/users",{
        params: {
            username,
            password
        }
    })
.then((res) => { 
    console.log(res)
    if (res.data.length > 0) {
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: {email: res.data[0].email, username}
        })
    } else {
        dispatch ({
            type: USER_NOT_FOUND,
            payload: "Username or password invalid"
        })
    }
    
})
.catch((err)=> { 
    console.log(err)
    dispatch({
        type: AUTH_SYSTEM_ERROR,
        payload: "System Error"
    })

})
}
