import test from 'tape';
import { GET_EVENT, GET_EVENT_REQUEST, GET_EVENT_SUCCESS, GET_EVENT_FAILURE, UPDATE_POLL } from '../../../src/js/actions/event.js';
import { getEvent, getEventRequest, getEventSuccess, getEventFailure, updatePoll } from '../../../src/js/actions/event.js';
import createThunk from '../../utils/mock-thunk.js';

test('getEvent async action creator returns expected action', (t) => {

    let actual;
    const { dispatch, queue } = createThunk();
    let eventID = 'event:100';
    dispatch(getEvent(eventID));

    [{...actual}] = queue;

    const expected = {
        type: GET_EVENT_REQUEST,
        isFetching: true
    };

    t.deepEqual(actual, expected, "getEvent returns GET_EVENT_REQUEST action");
    t.end();
});

test('getEventRequest action creator returns expected action', (t) => {

    const expected = {
        type: GET_EVENT_REQUEST,
        isFetching: true
    };
    const actual = getEventRequest();

    t.deepEqual(actual, expected);
    t.end();
});

test('getEventSuccess action creator returns expected action', (t) => {

    const data = {
        eventName: "sohil",
        eventDescription: "Birthday"
    };
    const expected = {
        type: GET_EVENT_SUCCESS,
        data,
        isFetching: false
    };

    const actual = getEventSuccess(data);

    t.deepEqual(actual, expected);
    t.end();
});

test('getEventFailure action creator returns expected action', (t) => {

    const error = {
        message: "Whoops"
    };
    const expected = {
        type: GET_EVENT_FAILURE,
        isFetching: false,
        error
    };

    const actual = getEventFailure(error);

    t.deepEqual(actual, expected);
    t.end();
});

test('updatePoll action creator returns expected action', (t) => {

    const expected = {
        type: UPDATE_POLL,
        eventType: "eventWhen",
        index: 2
    };

    const actual = updatePoll("eventWhen", 2);

    t.deepEqual(actual, expected);
    t.end();
});
