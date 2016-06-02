import update from 'react-addons-update';
import { UPLOAD_PHOTO_REQUEST, UPLOAD_PHOTO_SUCCESS, UPLOAD_PHOTO_FAILURE } from '../actions/photos.js';


const initialState = {
    uploadingPhoto: false,
    error: undefined
};

export default function photos (state = initialState, action) {

    switch (action.type) {

    case UPLOAD_PHOTO_REQUEST:
    case UPLOAD_PHOTO_SUCCESS:
        return handleRequest(state, action);

    case UPLOAD_PHOTO_FAILURE:
        return handleFailure(state, action);

    default:
        return state;
    }
}


function handleRequest (state, action) {

    let newState = update(state, {
        uploadingPhoto: { $set: action.uploadingPhoto }
    });
    return newState;
}

function handleFailure (state, action) {

    let newState = update(state, {
        uploadingPhoto: { $set: action.uploadingPhoto },
        error: { $set: action.error }
    });
    return newState;
}