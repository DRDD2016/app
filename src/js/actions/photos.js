import axios from 'axios';
import getUserID from '../lib/getUserID.js';


export const UPLOAD_PHOTO = "UPLOAD_PHOTO";
export const UPLOAD_PHOTO_REQUEST = "UPLOAD_PHOTO_REQUEST";
export const UPLOAD_PHOTO_SUCCESS = "UPLOAD_PHOTO_SUCCESS";
export const UPLOAD_PHOTO_FAILURE = "UPLOAD_PHOTO_FAILURE";

export const GET_S3_URL = "GET_S3_URL";
export const GET_S3_URL_REQUEST = "GET_S3_URL_REQUEST";
export const GET_S3_URL_SUCCESS = "GET_S3_URL_SUCCESS";
export const GET_S3_URL_FAILURE = "GET_S3_URL_FAILURE";



/********
UPLOAD PHOTO ACTIONS
********/

export function uploadPhoto (photo, eventID) {

    return (dispatch) => {

        dispatch(uploadPhotoRequest());

        let payload = {
            photo,
            eventID,
            userID: getUserID()
        };

        let config = {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        };

        axios.post('/upload-photo', payload)

            .then((response) => {

                dispatch(uploadPhotoSuccess());
            })
            .catch((error) => {
                dispatch(uploadPhotoFailure(error));
            });
    };
}

export function uploadPhotoRequest () {
    return {
        type: UPLOAD_PHOTO_REQUEST,
        isFetching: true
    };
}

export function uploadPhotoSuccess () {
    return {
        type: UPLOAD_PHOTO_SUCCESS,
        isFetching: false,
    };
}

export function uploadPhotoFailure (error) {
    return {
        type: UPLOAD_PHOTO_FAILURE,
        isFetching: false,
        error: error
    };
}


/********
GET S3 SIGNED URL ACTIONS
********/


export function getS3URL (filename, filetype, eventID) {

    return (dispatch) => {

        console.log(filename, filetype);
        // dispatch(getS3URLRequest());

        // axios.get(`/get-s3-url?filename=${filename}&filetype=${filetype}`)
        //     .then((response) => {
        //
        //         dispatch(getS3URLSuccess());
        //     })
        //     .catch((error) => {
        //
        //         dispatch(getS3URLFailure());
        //     });
    };
}

export function getS3URLRequest () {
    return {
        type: GET_S3_URL_REQUEST,
        isFetching: true
    };
}

export function getS3URLSuccess (url) {
    return {
        type: GET_S3_URL_SUCCESS,
        isFetching: false,
        url
    };
}

export function getS3URLFailure (error) {
    return {
        type: GET_S3_URL_FAILURE,
        isFetching: false,
        error
    };
}
