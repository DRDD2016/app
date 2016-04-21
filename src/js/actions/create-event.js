import axios from 'axios';

// create event
export const SET_EVENT_DETAILS = "SET_EVENT_DETAILS";
export const SET_EVENT_WHAT = "SET_EVENT_WHAT";
export const SET_EVENT_WHERE = "SET_EVENT_WHERE";
export const SET_EVENT_WHEN = "SET_EVENT_WHEN";
export const ADD_INPUT = "ADD_INPUT";
export const REMOVE_INPUT = "REMOVE_INPUT";
export const NEW_EVENT = "NEW_EVENT";
export const NEW_EVENT_REQUEST = "NEW_EVENT_REQUEST";
export const NEW_EVENT_SUCCESS = "NEW_EVENT_SUCCESS";
export const NEW_EVENT_FAILURE = "NEW_EVENT_FAILURE";

export function newEvent () {

    return {
        type: NEW_EVENT,
        isFetching: true
    };
}

export function newEventSuccess () {

    return {
        type: NEW_EVENT_SUCCESS,
        isFetching: false,
        didSave: true
    };
}

export function newEventFailure (error) {

    return {
        type: NEW_EVENT_FAILURE,
        isFetching: false,
        payload: error,
        didSave: false
    };
}

export function newEventRequest (eventData) {

    return function (dispatch) {

        dispatch(newEvent());
        return axios.post('/new-event', eventData )
            .then((response) => {
                console.log(response,'res');
                dispatch(newEventSuccess());
            })
            .catch((error) => {
                console.log(error,'errorr');
                dispatch(newEventFailure(error));
            });
    };
}

export function setEventDetails (data, inputType) {

    return {
        type: SET_EVENT_DETAILS,
        data,
        inputType,
        eventType: "eventDetails"
    };
}

export function setEventWhat (data, inputKey) {

    return {
        type: SET_EVENT_WHAT,
        data,
        inputKey,
        eventType: "eventWhat"
    };
}

export function setEventWhere (data, inputKey) {

    return {
        type: SET_EVENT_WHERE,
        data,
        inputKey,
        eventType: "eventWhere"
    };
}

export function setEventWhen (data, inputKey, format) {

    return {
        type: SET_EVENT_WHEN,
        data,
        inputKey,
        eventType: "eventWhen",
        format
    };
}

export function addInput (nextInputKey) {
    return {
        type: ADD_INPUT,
        nextInputKey,
        eventType: "eventWhen"
    };
}

export function removeInput (nextInputKey) {
    return {
        type: REMOVE_INPUT,
        nextInputKey,
        eventType: "eventWhen"
    };
}
