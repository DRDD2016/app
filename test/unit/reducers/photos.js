import test from 'tape';
import reducer from '../../../src/js/reducers/photos.js';


/********
UPLOAD PHOTO ACTIONS
********/

test('Reducer handles UPLOAD_PHOTO_REQUEST as expected', (t) => {

    const action = {
        type: "UPLOAD_PHOTO_REQUEST",
        isFetching: true
    };
    const initialState = {
        isFetching: false,
        error: undefined,
        url: undefined
    };

    const actual = reducer(initialState, action);

    let expected = {
        isFetching: true,
        error: undefined,
        url: undefined
    };

    t.deepEqual(actual, expected, 'on UPLOAD_PHOTO_REQUEST, isFetching is `true`');
    t.end();
});

test('Reducer handles UPLOAD_PHOTO_SUCCESS as expected', (t) => {

    const action = {
        type: "UPLOAD_PHOTO_SUCCESS",
        isFetching: false
    };

    const initialState = {
        isFetching: true,
        error: undefined,
        url: undefined
    };

    const actual = reducer(initialState, action);

    let expected = {
        isFetching: false,
        error: undefined,
        url: undefined
    };

    t.deepEqual(actual, expected, 'on UPLOAD_PHOTO_SUCCESS, isFetching is `false`');
    t.end();
});

test('Reducer handles UPLOAD_PHOTO_FAILURE as expected', (t) => {

    let initialState = {
        isFetching: true,
        error: undefined,
        url: undefined
    };

    const error = {
        message: "There was an error..."
    };

    const action = {
        type: "UPLOAD_PHOTO_FAILURE",
        isFetching: false,
        error: error
    };

    const actual = reducer(initialState, action);

    let expected = {
        isFetching: false,
        error: error,
        url: undefined
    };

    t.deepEqual(actual, expected);
    t.end();
});


/********
GET S3 SIGNED URL ACTIONS
********/

test('Reducer handles GET_S3_URL_SUCCESS as expected', (t) => {

    let url = "http://url.com";
    let initialState = {
        isFetching: true,
        error: undefined,
        url: undefined
    };

    let action = {
        type: "GET_S3_URL_SUCCESS",
        isFetching: false,
        url
    };

    const actual = reducer(initialState, action);

    let expected = {
        isFetching: false,
        error: undefined,
        url
    };

    t.deepEqual(actual, expected);
    t.end();
});
