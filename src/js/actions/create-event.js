// create event
export const SET_EVENT_DETAILS = "SET_EVENT_DETAILS";
export const SET_EVENT_WHAT = "SET_EVENT_WHAT";
export const SET_EVENT_WHERE = "SET_EVENT_WHERE";
export const SET_EVENT_WHEN = "SET_EVENT_WHEN";
export const ADD_INPUT = "ADD_INPUT";
export const REMOVE_INPUT = "REMOVE_INPUT";


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
