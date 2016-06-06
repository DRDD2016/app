import axios from 'axios';
import getUserID from '../lib/getUserID.js';


export const SET_PHOTO = "SET_PHOTO";

export const GET_S3_URL = "GET_S3_URL";
export const GET_S3_URL_REQUEST = "GET_S3_URL_REQUEST";
export const GET_S3_URL_SUCCESS = "GET_S3_URL_SUCCESS";
export const GET_S3_URL_FAILURE = "GET_S3_URL_FAILURE";

export const UPLOAD_PHOTO = "UPLOAD_PHOTO";
export const UPLOAD_PHOTO_REQUEST = "UPLOAD_PHOTO_REQUEST";
export const UPLOAD_PHOTO_SUCCESS = "UPLOAD_PHOTO_SUCCESS";
export const UPLOAD_PHOTO_FAILURE = "UPLOAD_PHOTO_FAILURE";

export const SAVE_PHOTO_URL = "SAVE_PHOTO_URL";
export const SAVE_PHOTO_URL_REQUEST = "SAVE_PHOTO_URL_REQUEST";
export const SAVE_PHOTO_URL_SUCCESS = "SAVE_PHOTO_URL_SUCCESS";
export const SAVE_PHOTO_URL_FAILURE = "SAVE_PHOTO_URL_FAILURE";


/********
SET PHOTO ACTION
********/

export function setPhoto (file) {
    return {
        type: SET_PHOTO,
        data: file
    };
}


/********
GET S3 SIGNED URL ACTIONS
********/


export function getS3URL (filename, filetype, eventID) {

    return (dispatch) => {

        dispatch(getS3URLRequest());

        axios.get(`/get-s3-url?filename=${filename}&filetype=${filetype}&eventID=${eventID}`)
            .then((response) => {

                dispatch(getS3URLSuccess(response.data));
            })
            .catch((error) => {

                dispatch(getS3URLFailure(error));
            });
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
        signedURL: url
    };
}

export function getS3URLFailure (error) {
    return {
        type: GET_S3_URL_FAILURE,
        isFetching: false,
        error
    };
}


/********
UPLOAD PHOTO ACTIONS
********/

export function uploadPhoto (url, photo) {
    console.log(photo);
    return (dispatch) => {

        dispatch(uploadPhotoRequest());

        let config = {
            headers: {
                'x-amz-acl': 'public-read-write',
                'Content-Type': photo.type
            }
        };

        axios.put(url, photo, config)

            .then((response) => {
                let photoURL = response.config.url.match(/\S+(?=\?)/)[0];
                dispatch(uploadPhotoSuccess(photoURL));
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

export function uploadPhotoSuccess (data) {
    return {
        type: UPLOAD_PHOTO_SUCCESS,
        isFetching: false,
        data
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
SAVE PHOTO URL ACTIONS
********/

export function savePhotoURL (url, eventID) {

    return (dispatch) => {

        dispatch(savePhotoURLRequest());

        let config = {
            photoURL: url,
            userID: getUserID(),
            eventID
        };

        axios.post(url, photo, config)

            .then((response) => {
                console.log("SAVED PHOTO URL", response);
                // dispatch(savePhotoURLSuccess(response.data));
            })
            .catch((error) => {
                dispatch(savePhotoURLFailure(error));
            });
    };
}

export function savePhotoURLRequest () {
    return {
        type: SAVE_PHOTO_URL_REQUEST,
        isFetching: true
    };
}

export function savePhotoURLSuccess (data) {
    return {
        type: SAVE_PHOTO_URL_SUCCESS,
        isFetching: false,
        data
    };
}

export function savePhotoURLFailure (error) {
    return {
        type: SAVE_PHOTO_URL_FAILURE,
        isFetching: false,
        error: error
    };
}
