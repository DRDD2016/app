import axios from 'axios';

export const GET_NOTIFICATIONS = "GET_NOTIFICATIONS";
export const GET_NOTIFICATIONS_REQUEST = "GET_NOTIFICATIONS_REQUEST";
export const GET_NOTIFICATIONS_SUCCESS = "GET_NOTIFICATIONS_SUCCESS";
export const GET_NOTIFICATIONS_FAILURE = "GET_NOTIFICATIONS_FAILURE";

export function getNotifications () {

    var matchCookie = document.cookie.match(/sparkID=\d+/);
    var id = matchCookie[0];

    return (dispatch) => {

        dispatch(getNotificationsRequest());
        axios.get('/get-notifications?' + id)
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
