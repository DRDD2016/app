import test from 'tape';
import reducer from '../../../src/js/reducers/notifications.js';

test('Reducer handles GET_NOTIFICATIONS_REQUEST as expected', (t) => {

    const initialState = {
        notifications: [],
        isFetching: false,
        error: undefined
    };
    const action = {
        type: "GET_NOTIFICATIONS_REQUEST",
        isFetching: true
    };
    const actual = reducer(initialState, action);
    const expected = {
        notifications: [],
        isFetching: true,
        error: undefined
    };

    t.deepEqual(actual, expected);
    t.end();
});
test('Reducer handles GET_NOTIFICATIONS_SUCCESS as expected', (t) => {

    const initialState = {
        notifications: [],
        isFetching: true,
        error: undefined
    };
    const data = {
        isPoll: true,
        timestamp: 87676554462,
        eventID: 'event:101',
        hostName: 'Sohil Pandya',
        hostPhotoURL: 'https://photo.com/image.jpg',
        eventWhat: "Sohil's bowling",
        eventWhere: undefined,
        eventWhen: undefined
    };
    const action = {
        type: "GET_NOTIFICATIONS_SUCCESS",
        isFetching: false,
        data: data
    };
    const actual = reducer(initialState, action);
    const expected = {
        notifications: [
            {
                isPoll: true,
                timestamp: 87676554462,
                eventID: 'event:101',
                hostName: 'Sohil Pandya',
                hostPhotoURL: 'https://photo.com/image.jpg',
                eventWhat: "Sohil's bowling",
                eventWhere: undefined,
                eventWhen: undefined
            }
        ],
        isFetching: false,
        error: undefined
    };

    t.deepEqual(actual, expected);
    t.end();
});


test('Reducer handles GET_NOTIFICATIONS_FAILURE as expected', (t) => {

    const initialState = {
        notifications: [],
        isFetching: true,
        error: undefined
    };
    const error = {
        message: "There was an error..."
    };
    const action = {
        type: "GET_NOTIFICATIONS_FAILURE",
        isFetching: false,
        error: error
    };
    const actual = reducer(initialState, action);
    const expected = {
        notifications: [],
        isFetching: false,
        error: {
            message: "There was an error..."
        }
    };

    t.deepEqual(actual, expected);
    t.end();
});
