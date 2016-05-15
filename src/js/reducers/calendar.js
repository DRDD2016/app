import update from 'react-addons-update';
import { GET_CALENDAR_REQUEST, GET_CALENDAR_SUCCESS, GET_CALENDAR_FAILURE } from '../actions/calendar.js';

const initialState = {
    data: [],
    isFetching: false,
    error: undefined
};

export default function calendar (state = initialState, action) {

    switch (action.type) {

    case GET_CALENDAR_REQUEST:
        return handleCalendarRequest(state, action);

    case GET_CALENDAR_SUCCESS:
        return handleCalendarSuccess(state, action);

    case GET_CALENDAR_FAILURE:
        return handleCalendarFailure(state, action);

    default:
        return state;
    }
}

function handleCalendarRequest (state, action) {

    let newState = update(state, {
        isFetching: { $set: action.isFetching }
    });
    return newState;
}

function handleCalendarSuccess (state, action) {

    let newState = update(state, {
        isFetching: { $set: action.isFetching },
        data: { $push: action.data }
    });
    return newState;
}

function handleCalendarFailure (state, action) {

    let newState = update(state, {
        isFetching: { $set: action.isFetching },
        error: { $set: action.error }
    });
    return newState;
}
