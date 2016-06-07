import update from 'react-addons-update';
import { SET_PHOTO } from '../actions/photos.js';
import { GET_S3_URL_REQUEST, GET_S3_URL_SUCCESS, GET_S3_URL_FAILURE } from '../actions/photos.js';
import { UPLOAD_PHOTO_REQUEST, UPLOAD_PHOTO_SUCCESS, UPLOAD_PHOTO_FAILURE } from '../actions/photos.js';
import { SAVE_PHOTO_URL_REQUEST, SAVE_PHOTO_URL_SUCCESS, SAVE_PHOTO_URL_FAILURE } from '../actions/photos.js';
import { GET_PHOTOS } from '../actions/photos.js';


const initialState = {
    isFetching: false,
    error: undefined,
    signedURL: undefined,
    photoURL: undefined,
    file: undefined,
    photos: undefined
};

export default function photos (state = initialState, action) {

    switch (action.type) {

    case GET_PHOTOS:
        return handleGetPhotos(state, action);

    case SET_PHOTO:
        return handleSetPhoto(state, action);

    case UPLOAD_PHOTO_REQUEST:
    case GET_S3_URL_REQUEST:
    case SAVE_PHOTO_URL_REQUEST:
        return handleRequest(state, action);

    case SAVE_PHOTO_URL_SUCCESS:
        return handleSavePhotoURLSuccess(state, action);

    case UPLOAD_PHOTO_SUCCESS:
        return handleUploadPhotoSuccess(state, action);

    case UPLOAD_PHOTO_FAILURE:
    case GET_S3_URL_FAILURE:
    case SAVE_PHOTO_URL_FAILURE:
        return handleFailure(state, action);

    case GET_S3_URL_SUCCESS:
        return handleGetS3URLSuccess(state, action);

    default:
        return state;
    }
}


function handleGetPhotos (state, action) {

    let newState = update(state, {
        photos: { $set: action.data }
    });
    return newState;
}

function handleSetPhoto (state, action) {

    let newState = update(state, {
        file: { $set: action.data }
    });
    return newState;
}


function handleUploadPhotoSuccess ( state, action ) {

    let newState = update(state, {
        photoURL: { $set: action.data },
        isFetching: { $set: action.isFetching },
        signedURL: { $set: undefined }
    });
    return newState;
}

function handleSavePhotoURLSuccess ( state, action ) {

    let newState = update(state, {
        isFetching: { $set: action.isFetching },
        photoURL: { $set: undefined }
    });
    return newState;
}

function handleRequest (state, action) {

    let newState = update(state, {
        isFetching: { $set: action.isFetching }
    });
    return newState;
}

function handleFailure (state, action) {

    let newState = update(state, {
        isFetching: { $set: action.isFetching },
        error: { $set: action.error }
    });
    return newState;
}

function handleGetS3URLSuccess (state, action) {

    let newState = update(state, {
        isFetching: { $set: action.isFetching },
        signedURL: { $set: action.signedURL }
    });
    return newState;
}
