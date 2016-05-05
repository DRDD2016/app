import test from 'tape';
import reducer from '../../../src/js/reducers/event.js';

test('Reducer handles GET_EVENT_REQUEST as expected', (t) => {

    const initialState = {
        data: {},
        isFetching: false,
        error: undefined
    };
    const action = {
        type: "GET_EVENT_REQUEST",
        isFetching: true
    };
    const actual = reducer(initialState, action);
    const expected = {
        data: {},
        isFetching: true,
        error: undefined
    };

    t.deepEqual(actual, expected);
    t.end();
});

test('Reducer handles GET_EVENT_SUCCESS as expected', (t) => {

    const initialState = {
        data: {},
        isFetching: true,
        error: undefined
    };
    const data = {
        eventName: "sohil",
        eventDescription: "Birthday"
    };
    const action = {
        type: "GET_EVENT_SUCCESS",
        isFetching: false,
        data: data
    };
    const actual = reducer(initialState, action);
    const expected = {
        data:{
            eventName: "sohil",
            eventDescription: "Birthday"
        },
        isFetching: false,
        error: undefined
    };

    t.deepEqual(actual, expected, "Event is fetched successfully");
    t.end();

});

test('Reducer handles GET_EVENT_FAILURE as expected', (t) => {

    const initialState = {
        data: {},
        isFetching: true,
        error: undefined
    };
    const error = {
        message: "There was an error..."
    };
    const action = {
        type: "GET_EVENT_FAILURE",
        isFetching: false,
        error: error
    };
    const actual = reducer(initialState, action);
    const expected = {
        data: {},
        isFetching: false,
        error: {
            message: "There was an error..."
        }
    };

    t.deepEqual(actual, expected);
    t.end();
});
