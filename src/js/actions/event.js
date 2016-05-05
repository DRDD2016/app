import axios from 'axios';
import getUserID from '../lib/getUserID.js';

export const GET_EVENT = 'GET_EVENT';
export const GET_EVENT_REQUEST = 'GET_EVENT_REQUEST';
export const GET_EVENT_SUCCESS = 'GET_EVENT_SUCCESS';
export const GET_EVENT_FAILURE = 'GET_EVENT_FAILURE';

export function getEvent(eventID) {

    return (dispatch) => {

        dispatch(getEventRequest());
        axios.get('/get-event?' + eventID )
            .then((event) => {
                dispatch(getEventSuccess(event));
            })
            .catch((error) => {
                dispatch(getEventFailure(error));
            });
    };
}

export function getEventRequest() {
    return {
        type: GET_EVENT_REQUEST,
        isFetching: true
    };
}

export function getEventSuccess(event) {
    return {
        type: GET_EVENT_SUCCESS,
        isFetching: false,
        data: event
    };
}

export function getEventFailure(error) {
    return {
        type: GET_EVENT_FAILURE,
        isFetching: false,
        error: error
    };
}
