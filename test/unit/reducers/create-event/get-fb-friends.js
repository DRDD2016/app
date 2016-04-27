import test from 'tape';
import reducer from '../../../../src/js/reducers/create-event.js';

test('Reducer handles GET_FB_FRIENDS_REQUEST as expected', (t) => {
    const initialState = {
        isFetching: false
    };

    const action = {
        type: "GET_FB_FRIENDS_REQUEST",
        isFetching: true,
    };

    const nextState = reducer(initialState, action);
    const expected = {
        isFetching: true,
        friends: undefined,
        error: undefined
    };

    t.deepEqual(nextState, expected, 'GET_FB_FRIENDS_REQUEST  sets state correctly');
    t.end();

});

test('Reducer handles GET_FB_FRIENDS_SUCCESS as expected', (t) => {
    const initialState = {
        isFetching: false
    };

    const action = {
        type: "GET_FB_FRIENDS_SUCCESS",
        isFetching: false,
        data: undefined
    };

    const nextState = reducer(initialState, action);
    const expected = {
        isFetching: false,
        friends: undefined,
        error: undefined
    };

    t.deepEqual(nextState, expected, 'GET_FB_FRIENDS_SUCCESS sets state correctly');
    t.end();

});

test('Reducer handles GET_FB_FRIENDS_FAILURE as expected', (t) => {
    const initialState = {
        isFetching: false
    };

    const action = {
        type: "GET_FB_FRIENDS_FAILURE",
        isFetching: false,
        error: undefined
    };

    const nextState = reducer(initialState, action);
    const expected = {
        isFetching: false,
        friends: undefined,
        error: undefined
    };

    t.deepEqual(nextState, expected, 'GET_FB_FRIENDS_SUCCESS sets state correctly');
    t.end();

});
