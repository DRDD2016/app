import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE } from '../actions/create-event.js';

const initialState = {
    isAuthenticated: false,
    isFetching: undefined
};

export default function auth(state = initialState, action) {

    switch(action.type) {

    case USER_LOGIN_REQUEST:
    case USER_LOGIN_SUCCESS:
    case USER_LOGIN_FAILURE:
        return handleUserLogin(state, action);

    default:
        return state;
    }
}

function handleUserLogin (state, action) {
    return {
        ...state,
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
    };
}
