import axios from 'axios';
import getUserID from '../lib/getUserID.js';


export const UPLOAD_PHOTO = "UPLOAD_PHOTO";
export const UPLOAD_PHOTO_REQUEST = "UPLOAD_PHOTO_REQUEST";
export const UPLOAD_PHOTO_SUCCESS = "UPLOAD_PHOTO_SUCCESS";
export const UPLOAD_PHOTO_FAILURE = "UPLOAD_PHOTO_FAILURE";


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
        uploadingPhoto: true
    };
}

export function uploadPhotoSuccess () {
    return {
        type: UPLOAD_PHOTO_SUCCESS,
        uploadingPhoto: false,
    };
}

export function uploadPhotoFailure (error) {
    return {
        type: UPLOAD_PHOTO_FAILURE,
        uploadingPhoto: false,
        error: error
    };
}
