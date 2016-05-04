import update from 'react-addons-update';
import { GET_NOTIFICATIONS_REQUEST, GET_NOTIFICATIONS_SUCCESS, GET_NOTIFICATIONS_FAILURE } from '../actions/notifications.js';

const initialState = {
    data: [],
    isFetching: false,
    error: undefined
};

export default function notifications (state = initialState, action) {

    switch (action.type) {

    case GET_NOTIFICATIONS_REQUEST:
        return handleGetNotificationsRequest(state, action);

    case GET_NOTIFICATIONS_SUCCESS:
        return handleGetNotificationsSuccess(state, action);
    case GET_NOTIFICATIONS_FAILURE:
        return handleGetNotificationsFailure(state, action);
    default:
        return state;
    }
}

function handleGetNotificationsRequest (state, action) {

    let newState = update(state, {
        isFetching: { $set: action.isFetching }
    });
    return newState;
}

function handleGetNotificationsSuccess (state, action) {

    console.log(typeof action.data);
    let newState = update(state, {
        isFetching: { $set: action.isFetching },
        data: { $set: action.data }
    });
    return newState;
}

function handleGetNotificationsFailure (state, action) {

    let newState = update(state, {
        isFetching: { $set: action.isFetching },
        error: { $set: action.error }
    });
    return newState;
}
