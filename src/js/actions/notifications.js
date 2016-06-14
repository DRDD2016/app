import axios from 'axios';
import getUserID from '../lib/getUserID.js';

export const GET_NOTIFICATIONS = "GET_NOTIFICATIONS";
export const GET_NOTIFICATIONS_REQUEST = "GET_NOTIFICATIONS_REQUEST";
export const GET_NOTIFICATIONS_SUCCESS = "GET_NOTIFICATIONS_SUCCESS";
export const GET_NOTIFICATIONS_FAILURE = "GET_NOTIFICATIONS_FAILURE";
export const APPLY_FILTER = "APPLY_FILTER";
export const CLEAR_FILTER = "CLEAR_FILTER";

// import { socket } from '../socket.js';

export function getNotifications () {

    var id = getUserID();

    return (dispatch) => {

        dispatch(getNotificationsRequest());

        axios.get('/get-notifications?userID=' + id)
            .then((response) => {

                dispatch(getNotificationsSuccess(response.data));
            })
            .catch((error) => {

                dispatch(getNotificationsFailure(error));
            });
    };
}

export function getNotificationsRequest () {
    return {
        type: GET_NOTIFICATIONS_REQUEST,
        isFetching: true
    };
}

export function getNotificationsSuccess (data) {
    return {
        type: GET_NOTIFICATIONS_SUCCESS,
        isFetching: false,
        data
    };
}

export function getNotificationsFailure (error) {
    return {
        type: GET_NOTIFICATIONS_FAILURE,
        isFetching: false,
        error
    };
}

export function applyFilter (filter) {
    return {
        type: APPLY_FILTER,
        filter: true,
        showHosting: filter
    };
}


export function clearFilter () {
    return {
        type: CLEAR_FILTER,
        filter: false,
        showHosting: undefined
    };
}
