import update from 'react-addons-update';
import { GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILURE } from '../actions/user.js';

const initialState = {
    isFetching: false,
    firstName: '',
    lastName: '',
    photoURL: '',
    id: '',
    error: undefined,
    editedfirstName: '',
    editedlastName: ''
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

function handleGetUserRequest (state, action) {

    return update(state, {
        isFetching: { $set: true }
    });
}

function handleGetUserSuccess (state, action) {

    return update(state, {
        isFetching: { $set: false },
        firstName: { $set: action.data.firstName },
        lastName: { $set: action.data.lastName },
        photoURL: { $set: action.data.photoURL },
        id: { $set: action.data.id }
    });
}

function handleGetUserFailure (state, action) {

    return update(state, {
        isFetching: { $set: false },
        error: { $set: action.error }
    });
}
