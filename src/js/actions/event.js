import axios from 'axios';
import getUserID from '../lib/getUserID.js';

export const GET_EVENT = 'GET_EVENT';
export const GET_EVENT_REQUEST = 'GET_EVENT_REQUEST';
export const GET_EVENT_SUCCESS = 'GET_EVENT_SUCCESS';
export const GET_EVENT_FAILURE = 'GET_EVENT_FAILURE';
export const UPDATE_POLL = 'UPDATE_POLL';

export const CONFIRM_POLL = 'CONFIRM_POLL';
export const CONFIRM_POLL_REQUEST = 'CONFIRM_POLL_REQUEST';
export const CONFIRM_POLL_SUCCESS = 'CONFIRM_POLL_SUCCESS';
export const CONFIRM_POLL_FAILURE = 'CONFIRM_POLL_FAILURE';


export function getEvent (eventID) {

    return (dispatch) => {

        dispatch(getEventRequest());

        axios.get('/get-event?eventID=' + eventID + '&userID=' + getUserID())
            .then((response) => {
                dispatch(getEventSuccess(response.data));
            })
            .catch((error) => {
                dispatch(getEventFailure(error));
            });
    };
}

export function getEventRequest () {
    return {
        type: GET_EVENT_REQUEST,
        isFetching: true
    };
}

export function getEventSuccess (event) {
    return {
        type: GET_EVENT_SUCCESS,
        isFetching: false,
        data: event
    };
}

export function getEventFailure (error) {
    return {
        type: GET_EVENT_FAILURE,
        isFetching: false,
        error: error
    };
}

export function updatePoll (eventType, index) {
    return {
        type: UPDATE_POLL,
        eventType,
        index
    };
}

export function confirmPoll (poll, eventID) {

    return (dispatch) => {

        let payload = {
            poll,
            eventID,
            userID: getUserID()
        };

        dispatch(confirmPollRequest());

        axios.post('/confirm-poll', payload)
            .then((response) => {
                dispatch(confirmPollSuccess(response.data));
            })
            .catch((error) => {
                dispatch(confirmPollFailure(error));
            });
    };
}

export function confirmPollRequest () {
    return {
        type: CONFIRM_POLL_REQUEST,
        isFetching: true
    };
}

export function confirmPollSuccess () {
    return {
        type: CONFIRM_POLL_SUCCESS,
        isFetching: false
    };
}
export function confirmPollFailure () {
    return {
        type: CONFIRM_POLL_FAILURE,
        isFetching: false
    };
}
