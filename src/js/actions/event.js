import axios from 'axios';
import getUserID from '../lib/getUserID.js';
import { clearCreateEvent } from './create-event.js';
import { getPhotos, getDeletedPhotos } from './photos.js';

export const GET_EVENT = 'GET_EVENT';
export const GET_EVENT_REQUEST = 'GET_EVENT_REQUEST';
export const GET_EVENT_SUCCESS = 'GET_EVENT_SUCCESS';
export const GET_EVENT_FAILURE = 'GET_EVENT_FAILURE';

export const UPDATE_POLL = 'UPDATE_POLL';

export const CONFIRM_POLL = 'CONFIRM_POLL';
export const CONFIRM_POLL_REQUEST = 'CONFIRM_POLL_REQUEST';
export const CONFIRM_POLL_SUCCESS = 'CONFIRM_POLL_SUCCESS';
export const CONFIRM_POLL_FAILURE = 'CONFIRM_POLL_FAILURE';

export const ADD_HOST_EVENT_CHOICE = 'ADD_HOST_EVENT_CHOICE';

export const CONFIRM_EVENT = 'CONFIRM_EVENT';
export const CONFIRM_EVENT_REQUEST = 'CONFIRM_EVENT_REQUEST';
export const CONFIRM_EVENT_SUCCESS = 'CONFIRM_EVENT_SUCCESS';
export const CONFIRM_EVENT_FAILURE = 'CONFIRM_EVENT_FAILURE';

export const UPDATE_RSVP = 'UPDATE_RSVP';
export const UPDATE_RSVP_REQUEST = 'UPDATE_RSVP_REQUEST';
export const UPDATE_RSVP_SUCCESS = 'UPDATE_RSVP_SUCCESS';
export const UPDATE_RSVP_FAILURE = 'UPDATE_RSVP_FAILURE';

export const DELETE_EVENT = 'DELETE_EVENT';
export const DELETE_EVENT_REQUEST = 'DELETE_EVENT_REQUEST';
export const DELETE_EVENT_SUCCESS = 'DELETE_EVENT_SUCCESS';
export const DELETE_EVENT_FAILURE = 'DELETE_EVENT_FAILURE';

export const SAVE_EDITED_EVENT = 'SAVE_EDITED_EVENT';
export const SAVE_EDITED_EVENT_REQUEST = 'SAVE_EDITED_EVENT_REQUEST';
export const SAVE_EDITED_EVENT_SUCCESS = 'SAVE_EDITED_EVENT_SUCCESS';
export const SAVE_EDITED_EVENT_FAILURE = 'SAVE_EDITED_EVENT_FAILURE';

export const UPDATE_NOTIFICATION = 'UPDATE_NOTIFICATION';
export const UPDATE_NOTIFICATION_REQUEST = 'UPDATE_NOTIFICATION_REQUEST';
export const UPDATE_NOTIFICATION_SUCCESS = 'UPDATE_NOTIFICATION_SUCCESS';
export const UPDATE_NOTIFICATION_FAILURE = 'UPDATE_NOTIFICATION_FAILURE';

export const RESET_EVENT_STATE = 'RESET_EVENT_STATE';


/********
GET EVENT ACTIONS
********/

export function getEvent (eventID) {

    return (dispatch) => {

        dispatch(getEventRequest());

        axios.get('/get-event?eventID=' + eventID + '&userID=' + getUserID())
            .then((response) => {
                dispatch(getEventSuccess(response.data));
                dispatch(getPhotos(response.data.photos));
                dispatch(getDeletedPhotos(response.data.deletedPhotos));
            })
            .catch((error) => {
                console.log(error, 'error from get event');
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

/********
CONFIRM POLL ACTIONS
********/

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
                dispatch(getEvent(eventID));
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

export function addHostEventChoice (eventType, value, index) {
    return {
        type: ADD_HOST_EVENT_CHOICE,
        eventType,
        value,
        index
    };
}

/********
CONFIRM EVENT ACTIONS
********/

export function confirmEvent (hostEventChoices, eventID) {

    return (dispatch) => {

        let payload = {
            hostEventChoices,
            eventID
        };

        dispatch(confirmEventRequest());

        axios.post('/confirm-event', payload)
            .then((response) => {
                dispatch(confirmEventSuccess());
            })
            .catch((error) => {
                dispatch(confirmEventFailure());
            });
    };
}

export function confirmEventRequest () {
    return {
        type: CONFIRM_EVENT_REQUEST,
        isFetching: true
    };
}

export function confirmEventSuccess () {
    return {
        type: CONFIRM_EVENT_SUCCESS,
        isFetching: false,
    };
}
export function confirmEventFailure () {
    return {
        type: CONFIRM_EVENT_FAILURE,
        isFetching: false
    };
}

/********
UPDATE RSVP ACTIONS
********/

export function updateRSVP (RSVPStatus, eventID) {

    return (dispatch) => {

        let payload = {
            userID: getUserID(),
            eventID,
            RSVPStatus
        };

        dispatch(updateRSVPRequest());

        axios.post('/update-rsvp', payload)
            .then((response) => {
                dispatch(updateRSVPSuccess(response.data));
            })
            .catch((error) => {
                dispatch(updateRSVPFailure(error));
            });
    };
}

export function updateRSVPRequest () {
    return {
        type: UPDATE_RSVP_REQUEST,
        isFetching: true
    };
}

export function updateRSVPSuccess (RSVPs) {
    return {
        type: UPDATE_RSVP_SUCCESS,
        isFetching: false,
        data: RSVPs
    };
}

export function updateRSVPFailure (error) {
    return {
        type: UPDATE_RSVP_FAILURE,
        isFetching: false,
        error
    };
}


/********
DELETE EVENT ACTIONS
********/


export function deleteEvent (eventID) {

    return (dispatch) => {

        dispatch(deleteEventRequest());

        axios.get('/delete-event?eventID=' + eventID)
            .then((response) => {
                dispatch(deleteEventSuccess(response.data));
            })
            .catch((error) => {
                dispatch(deleteEventFailure(error));
            });
    };
}

export function deleteEventRequest () {
    return {
        type: DELETE_EVENT_REQUEST,
        isFetching: true
    };
}

export function deleteEventSuccess () {
    return {
        type: DELETE_EVENT_SUCCESS,
        isFetching: false,
    };
}

export function deleteEventFailure (error) {
    return {
        type: DELETE_EVENT_FAILURE,
        isFetching: false,
        error: error
    };
}

/********
SAVE_EDITED_EVENT ACTIONS
********/

export function saveEditedEvent (eventName, eventDescription, eventNote, eventWhat, eventWhere, eventWhen, eventID) {

    return (dispatch) => {

        let payload = {
            eventID,
            eventName,
            eventDescription,
            eventNote,
            eventWhat,
            eventWhere,
            eventWhen,
            userID: getUserID()
        };

        dispatch(saveEditedEventRequest());

        axios.post('/edit-event', payload)
        .then((response) => {
            dispatch(saveEditedEventSuccess());
            dispatch(clearCreateEvent());
        })
        .catch((error) => {
            dispatch(savedEditedEventFailure(error));
        });
    };
}

export function saveEditedEventRequest () {
    return {
        type: SAVE_EDITED_EVENT_REQUEST,
        isFetching: true
    };
}

export function saveEditedEventSuccess () {
    return {
        type: SAVE_EDITED_EVENT_SUCCESS,
        isFetching: false,
    };
}

export function saveEditedEventFailure (error) {
    return {
        type: SAVE_EDITED_EVENT_FAILURE,
        isFetching: false,
        error: error
    };
}

/********
UPDATE NOTIFICATIONS ACTIONS
********/
export function updateNotification (index) {

    return (dispatch) => {

        dispatch(updateNotificationRequest());

        axios.get('/update-notification?index=' + index + '&userID=' + getUserID())
            .then((response) => {
                dispatch(updateNotificationSuccess());
            })
            .catch((error) => {
                console.error(error);
                dispatch(updateNotificationFailure(error));
            });
    };
}

export function updateNotificationRequest () {
    return {
        type: UPDATE_NOTIFICATION_REQUEST,
        updateNotification: true
    };
}

export function updateNotificationSuccess (event) {
    return {
        type: UPDATE_NOTIFICATION_SUCCESS,
        updateNotification: false,
    };
}

export function updateNotificationFailure (error) {
    return {
        type: UPDATE_NOTIFICATION_FAILURE,
        updateNotification: false,
        error: error
    };
}

/********
RESET_EVENT_STATE ACTION
********/

export function resetEventState () {
    return {
        type: RESET_EVENT_STATE
    };
}
