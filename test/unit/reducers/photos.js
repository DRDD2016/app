import test from 'tape';
import reducer from '../../../src/js/reducers/photos.js';


test('Reducer handles UPLOAD_PHOTO_REQUEST as expected', (t) => {

    const action = {
        type: "UPLOAD_PHOTO_REQUEST",
        isFetching: true
    };
    const initialState = {
        isFetching: false,
        error: undefined
    };

    const actual = reducer(initialState, action);

    let expected = {
        isFetching: true,
        error: undefined
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
        error: undefined
    };

    const actual = reducer(initialState, action);

    let expected = {
        isFetching: false,
        error: undefined
    };

    t.deepEqual(actual, expected, 'on UPLOAD_PHOTO_SUCCESS, isFetching is `false`');
    t.end();
});

test('Reducer handles UPLOAD_PHOTO_FAILURE as expected', (t) => {

    let initialState = {
        isFetching: true,
        error: undefined
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
        error: error
    };

    t.deepEqual(actual, expected);
    t.end();
});
