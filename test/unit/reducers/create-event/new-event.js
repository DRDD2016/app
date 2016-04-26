import test from 'tape';
import reducer from '../../../../src/js/reducers/create-event.js';

test('Reducer handles NEW_EVENT as expected', (t) => {
    const initialState = {
        isFetching: false
    };

    const action = {
        type: "NEW_EVENT",
        isFetching: true
    };

    const nextState = reducer(initialState, action);
    const expected = {
        isFetching: true,
        didSave: undefined,
        error: undefined
    };

    t.deepEqual(nextState, expected, 'New event sets state correctly');
    t.end();

});

test('Reducer handles NEW_EVENT_SUCCESS as expected', (t) => {
    const initialState = {
        isFetching: true
    };

    const action = {
        type: "NEW_EVENT_SUCCESS",
        isFetching: false,
        didSave: true
    };

    const nextState = reducer(initialState, action);
    const expected = {
        isFetching: false,
        didSave: true,
        error: undefined
    };

    t.deepEqual(nextState, expected, 'New event Success sets state correctly');
    t.end();

});

test('Reducer handles NEW_EVENT_FAILURE as expected', (t) => {
    const initialState = {
        isFetching: true
    };

    const action = {
        type: "NEW_EVENT_FAILURE",
        isFetching: false,
        didSave: false,
        error: undefined
    };

    const nextState = reducer(initialState, action);
    const expected = {
        isFetching: false,
        didSave: false,
        error: undefined
    };

    t.deepEqual(nextState, expected, 'New event Success sets state correctly');
    t.end();

});
