import axios from 'axios';
import getUserID from '../lib/getUserID.js';

export const GET_NOTIFICATIONS = "GET_NOTIFICATIONS";
export const GET_NOTIFICATIONS_REQUEST = "GET_NOTIFICATIONS_REQUEST";
export const GET_NOTIFICATIONS_SUCCESS = "GET_NOTIFICATIONS_SUCCESS";
export const GET_NOTIFICATIONS_FAILURE = "GET_NOTIFICATIONS_FAILURE";

export function getNotifications () {

    var id = getUserID();

    return (dispatch) => {

        dispatch(getNotificationsRequest());
        axios.get('/get-notifications?' + id)
        .then((response) => {
            console.log("is this running");
            dispatch(getNotificationsSuccess(response.data));
        })
        .catch((error) => {
            console.log("error", error);
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
        data: data
    };
}

export function getNotificationsFailure (error) {
    return {
        type: GET_NOTIFICATIONS_FAILURE,
        isFetching: false,
        error: error
    };
}
