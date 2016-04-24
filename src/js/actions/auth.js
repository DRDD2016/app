import axios from 'axios';

export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE";


export function userLogin () {

    return function (dispatch) {

        dispatch(userLoginRequest());
        return window.location = '/bell/door';
    };
}

export function userLoginRequest () {

    return {
        type: USER_LOGIN_REQUEST,
        isFetching: true
    };
}

export function userLoginSuccess () {

    return {
        type: USER_LOGIN_SUCCESS,
        isFetching: false,
        isAuthenticated: true
    };
}

export function userLoginFailure () {

    return {
        type: USER_LOGIN_FAILURE,
        isFetching: false,
        isAuthenticated: false
    };
}
