import test from 'tape';
import { UPLOAD_PHOTO, UPLOAD_PHOTO_REQUEST, UPLOAD_PHOTO_SUCCESS, UPLOAD_PHOTO_FAILURE } from '../../../src/js/actions/photos.js';
import { uploadPhoto, uploadPhotoRequest, uploadPhotoSuccess, uploadPhotoFailure } from '../../../src/js/actions/photos.js';
import createThunk from '../../utils/mock-thunk.js';

test('uploadPhoto async action creator returns expected action', (t) => {
    let actual;
    const { dispatch, queue } = createThunk();
    var eventID = 'event:100';
    var photo = 'Photo.jpg';
    dispatch(uploadPhoto(photo, eventID));

    [{ ...actual }] = queue;

    const expected = {
        type: UPLOAD_PHOTO_REQUEST,
        uploadingPhoto: true
    };
    t.deepEqual(actual, expected, "uploadPhoto returns the UPLOAD_PHOTO_REQUEST action");
    t.end();
});


test('uploadPhotoRequest action creator returns expected action', (t) => {

    const expected = {
        type: UPLOAD_PHOTO_REQUEST,
        uploadingPhoto: true
    };
    const actual = uploadPhotoRequest();

    t.deepEqual(actual, expected);
    t.end();
});

test('uploadPhotoSuccess action creator returns expected action', (t) => {


    const expected = {
        type: UPLOAD_PHOTO_SUCCESS,
        uploadingPhoto: false
    };

    const actual = uploadPhotoSuccess();

    t.deepEqual(actual, expected);
    t.end();
});

test('uploadPhotoFailure action creator returns expected action', (t) => {

    const error = {
        message: "Whoops"
    };
    const expected = {
        type: UPLOAD_PHOTO_FAILURE,
        uploadingPhoto: false,
        error
    };

    const actual = uploadPhotoFailure(error);

    t.deepEqual(actual, expected);
    t.end();
});
