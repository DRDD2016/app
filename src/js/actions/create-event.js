import axios from 'axios';
import getUserID from '../lib/getUserID.js';
import { hashHistory } from 'react-router';

export const SET_EVENT_DETAILS = "SET_EVENT_DETAILS";
export const SET_EVENT_WHAT = "SET_EVENT_WHAT";
export const SET_EVENT_WHERE = "SET_EVENT_WHERE";
export const SET_EVENT_WHEN = "SET_EVENT_WHEN";

export const NEW_EVENT = "NEW_EVENT";
export const NEW_EVENT_REQUEST = "NEW_EVENT_REQUEST";
export const NEW_EVENT_SUCCESS = "NEW_EVENT_SUCCESS";
export const NEW_EVENT_FAILURE = "NEW_EVENT_FAILURE";
export const CLEAR_CREATE_EVENT = "CLEAR_CREATE_EVENT";

export const GET_FB_FRIENDS = "GET_FB_FRIENDS";
export const GET_FB_FRIENDS_REQUEST = "GET_FB_FRIENDS_REQUEST";
export const GET_FB_FRIENDS_SUCCESS = "GET_FB_FRIENDS_SUCCESS";
export const GET_FB_FRIENDS_FAILURE = "GET_FB_FRIENDS_FAILURE";

export const ADD_INPUT = "ADD_INPUT";
export const REMOVE_INPUT = "REMOVE_INPUT";

export const ADD_INVITEE = "ADD_INVITEE";
export const REMOVE_INVITEE = "REMOVE_INVITEE";

export const HYDRATE_CREATE_EVENT = "HYDRATE_CREATE_EVENT";


/********
SET EVENT ACTIONS
********/

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

/********
NEW EVENT ACTIONS
********/

export function newEvent (eventData) {

    return function (dispatch) {

        dispatch(newEventRequest());

        return axios.post('/new-event', eventData)
            .then((response) => {
                dispatch(newEventSuccess());
                hashHistory.push('/feed');
                dispatch(clearCreateEvent());
            })
            .catch((error) => {
                dispatch(newEventFailure(error));
            });
    };
}

export function newEventRequest () {

    return {
        type: NEW_EVENT_REQUEST,
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
        error: error,
        didSave: false
    };
}

export function clearCreateEvent () {
    return {
        type: CLEAR_CREATE_EVENT
    };
}

/********
GET FB FRIENDS ACTIONS
********/

export function getFBFriends () {

    var id = getUserID();

    return (dispatch) => {

        dispatch(getFBFriendsRequest());

        axios.get('/new-event/friends?userID=' + id)
            .then((response) => {
                dispatch(getFBFriendsSuccess(response.data));
            })
            .catch((error) => {
                dispatch(getFBFriendsFailure(error));
            });
    };
}

export function getFBFriendsRequest () {
    return {
        type: GET_FB_FRIENDS_REQUEST,
        isFetching: true,
        data: []
    };
}

export function getFBFriendsSuccess (data) {
    return {
        type: GET_FB_FRIENDS_SUCCESS,
        isFetching: false,
        data: data
    };
}

export function getFBFriendsFailure (error) {
    return {
        type: GET_FB_FRIENDS_FAILURE,
        isFetching: false,
        error: error
    };
}

/********
INPUT ACTIONS
********/

export function addInput (eventType) {
    return {
        type: ADD_INPUT,
        eventType
    };
}

export function removeInput (inputKey, eventType) {
    return {
        type: REMOVE_INPUT,
        inputKey,
        eventType
    };
}

/********
INVITEE ACTIONS
********/

export function addInvitee (friend, index) {
    return {
        type: ADD_INVITEE,
        data: friend,
        index
    };
}

export function removeInvitee (invitee, index) {
    return {
        type: REMOVE_INVITEE,
        data: invitee,
        index
    };
}

/********
HYDRATE EDIT EVENT ACTIONS
********/

export function hydrateCreateEvent (event) {
    return {
        type: HYDRATE_CREATE_EVENT,
        data: event
    };
}
