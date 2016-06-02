import test from 'tape';
import reducer from '../../../src/js/reducers/photos.js';


test('Reducer handles UPLOAD_PHOTO_REQUEST as expected', (t) => {

    const action = {
        type: "UPLOAD_PHOTO_REQUEST",
        uploadingPhoto: true
    };
    const initialState = {
        uploadingPhoto: false,
        error: undefined
    };

    const actual = reducer(initialState, action);

    let expected = {
        uploadingPhoto: true,
        error: undefined
    };

    t.deepEqual(actual, expected, 'on UPLOAD_PHOTO_REQUEST, uploadingPhoto is `true`');
    t.end();
});

test('Reducer handles UPLOAD_PHOTO_SUCCESS as expected', (t) => {

    const action = {
        type: "UPLOAD_PHOTO_SUCCESS",
        uploadingPhoto: false
    };

    const initialState = {
        uploadingPhoto: true,
        error: undefined
    };

    const actual = reducer(initialState, action);

    let expected = {
        uploadingPhoto: false,
        error: undefined
    };

    t.deepEqual(actual, expected, 'on UPLOAD_PHOTO_SUCCESS, uploadingPhoto is `false`');
    t.end();
});

test('Reducer handles UPLOAD_PHOTO_FAILURE as expected', (t) => {

    let initialState = {
        uploadingPhoto: true,
        error: undefined
    };

    const error = {
        message: "There was an error..."
    };

    const action = {
        type: "UPLOAD_PHOTO_FAILURE",
        uploadingPhoto: false,
        error: error
    };

    const actual = reducer(initialState, action);

    let expected = {
        uploadingPhoto: false,
        error: error
    };

    t.deepEqual(actual, expected);
    t.end();
});
