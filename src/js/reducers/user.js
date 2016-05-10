import { GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILURE } from '../actions/user.js';

const initialState = {
    isFetching: false,
    firstName: '',
    lastName: '',
    photoURL: '',
    id: '',
    error: undefined
};

export default function user (state = initialState, action) {
    switch (action.type) {
    case GET_USER_REQUEST:
        return handleGetUserRequest(state, action);
    case GET_USER_SUCCESS:
        return handleGetUserSuccess(state, action);
    case GET_USER_FAILURE:
        return handleGetUserFailure(state, action);

    default:
        return state;
    }
}

function handleGetUserRequest (state, action){
    return {
        ...state,
        isFetching: true
    };
}

function handleGetUserSuccess (state, action){
    return {
        ...state,
        isFetching: false,
        firstName: action.data.firstName,
        lastName: action.data.lastName,
        photoURL: action.data.photoURL,
        id: action.data.id
    };
}

function handleGetUserFailure (state, action){
    return {
        ...state,
        isFetching: false,
        error: action.error
    };
}
