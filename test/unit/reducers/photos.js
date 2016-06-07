import test from 'tape';
import reducer from '../../../src/js/reducers/photos.js';
import { photos as initialState } from './fixtures.js';

/********
SET PHOTO ACTIONS
********/

test('Reducer handles SET_PHOTO as expected', (t) => {

    let photo = {
        filetype: 'jpg'
    };

    let action = {
        type: "SET_PHOTO",
        data: photo
    };

    const actual = reducer(initialState, action);

    let expected = Object.assign({}, initialState);
    expected.file = photo;

    t.deepEqual(actual, expected);
    t.end();
});

/********
GET S3 SIGNED URL ACTIONS
********/

test('Reducer handles GET_S3_URL_REQUEST', (t) => {

    let action = {
        type: "GET_S3_URL_REQUEST",
        isFetching: true
    };

    const actual = reducer(initialState, action);

    let expected = Object.assign({}, initialState);
    expected.isFetching = true;

    t.deepEqual(actual, expected);
    t.end();
});

test('Reducer handles GET_S3_URL_SUCCESS as expected', (t) => {

    let url = "http://url.com";
    let state = Object.assign({}, initialState);
    state.isFetching = true;

    let action = {
        type: "GET_S3_URL_SUCCESS",
        isFetching: false,
        signedURL: url
    };

    const actual = reducer(state, action);

    let expected = Object.assign({}, state);
    expected.isFetching = false;
    expected.signedURL = url;

    t.deepEqual(actual, expected);
    t.end();
});

test('Reducer handles GET_S3_URL_FAILURE as expected', (t) => {

    let state = Object.assign({}, initialState);

    const error = {
        message: "There was an error..."
    };

    const action = {
        type: "GET_S3_URL_FAILURE",
        isFetching: false,
        error: error
    };

    const actual = reducer(state, action);

    let expected = Object.assign({}, state);
    expected.error = error;

    t.deepEqual(actual, expected);
    t.end();
});


/********
UPLOAD PHOTO ACTIONS
********/

test('Reducer handles UPLOAD_PHOTO_REQUEST as expected', (t) => {

    let state = Object.assign({}, initialState);
    state.signedURL = "http://url.com";

    const action = {
        type: "UPLOAD_PHOTO_REQUEST",
        isFetching: true
    };

    const actual = reducer(state, action);

    let expected = Object.assign({}, state);
    expected.isFetching = true;

    t.deepEqual(actual, expected, 'on UPLOAD_PHOTO_REQUEST, isFetching is `true`');
    t.end();
});

test('Reducer handles UPLOAD_PHOTO_SUCCESS as expected', (t) => {

    let photoURL = "https://aws.com/photolocation.jpg";
    let state = Object.assign({}, initialState);
    state.signedURL = "http://url.com";

    const action = {
        type: "UPLOAD_PHOTO_SUCCESS",
        isFetching: false,
        data: photoURL
    };

    const actual = reducer(state, action);

    let expected = Object.assign({}, state);
    expected.isFetching = false;
    expected.photoURL = photoURL;
    expected.signedURL = undefined;

    t.deepEqual(actual, expected, 'isFetching is `false`, photoURL is set, signedURL is unset');
    t.end();
});

test('Reducer handles UPLOAD_PHOTO_FAILURE as expected', (t) => {

    let state = Object.assign({}, initialState);
    state.signedURL = "http://url.com";

    const error = {
        message: "There was an error..."
    };

    const action = {
        type: "UPLOAD_PHOTO_FAILURE",
        isFetching: false,
        error: error
    };

    const actual = reducer(state, action);

    let expected = Object.assign({}, state);
    expected.isFetching = false;
    expected.error = error;
    state.signedURL = undefined;

    t.deepEqual(actual, expected, 'isFetching is `false`, error is set, signedURL is unset');
    t.end();
});

/********
SAVE PHOTO ACTIONS
********/

test('Reducer handles SAVE_PHOTO_URL_REQUEST as expected', (t) => {

    let state = initialState;
    state.photoURL = "https://aws.com/photolocation.jpg";

    const action = {
        type: "SAVE_PHOTO_URL_REQUEST",
        isFetching: true
    };
    const actual = reducer(state, action);

    let expected = Object.assign({}, state);
    expected.isFetching = true;

    t.deepEqual(actual, expected);
    t.end();
});

test('Reducer handles SAVE_PHOTO_URL_SUCCESS as expected', (t) => {

    const state = initialState;
    state.isFetching = true;
    state.photoURL = "https://aws.com/photolocation.jpg";

    const action = {
        type: "SAVE_PHOTO_URL_SUCCESS",
        isFetching: false
    };

    const actual = reducer(state, action);

    let expected = Object.assign({}, state);
    expected.isFetching = false;
    expected.photoURL = undefined;

    t.deepEqual(actual, expected, 'isFetching is `false`, photoURL is unset');
    t.end();
});

test('Reducer handles SAVE_PHOTO_URL_FAILURE as expected', (t) => {

    const state = initialState;
    state.isFetching = true;
    state.photoURL = "https://aws.com/photolocation.jpg";

    const error = {
        message: "There was an error..."
    };

    const action = {
        type: "SAVE_PHOTO_URL_FAILURE",
        isFetching: false,
        error: error
    };

    const actual = reducer(state, action);
    let expected = Object.assign({}, state);
    expected.error = error;
    expected.photoURL = undefined;

    t.deepEqual(actual, expected, 'isFetching is `false`, error is set, photoURL is unset');
    t.end();
});
