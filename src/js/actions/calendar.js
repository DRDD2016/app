import axios from 'axios';
import getUserID from '../lib/getUserID.js';

export const GET_CALENDAR = "GET_CALENDAR";
export const GET_CALENDAR_REQUEST = "GET_CALENDAR_REQUEST";
export const GET_CALENDAR_SUCCESS = "GET_CALENDAR_SUCCESS";
export const GET_CALENDAR_FAILURE = "GET_CALENDAR_FAILURE";

export function getCalendar () {

    var id = getUserID();

    return (dispatch) => {

        dispatch(getCalendarRequest());

        axios.get('/get-calendar?userID=' + id)
            .then((response) => {

                dispatch(getCalendarSuccess(response.data));
            })
            .catch((error) => {

                dispatch(getCalendarFailure(error));
            });
    };
}

export function getCalendarRequest () {
    return {
        type: GET_CALENDAR_REQUEST,
        isFetching: true
    };
}

export function getCalendarSuccess (data) {
    return {
        type: GET_CALENDAR_SUCCESS,
        isFetching: false,
        data
    };
}

export function getCalendarFailure (error) {
    return {
        type: GET_CALENDAR_FAILURE,
        isFetching: false,
        error
    };
}
