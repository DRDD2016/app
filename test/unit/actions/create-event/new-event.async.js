import test from 'tape';
import configureMockStore from 'redux-mock-store';
import nock from 'nock';
import thunk from 'redux-thunk';
import { NEW_EVENT_REQUEST, newEvent } from '../../../../src/js/actions/create-event.js';
import createThunk from '../../../utils/mock-thunk.js';

test('newEvent async action creator returns expected action', (t) => {
    let actual;
    const { dispatch, queue } = createThunk();
    dispatch(newEvent());

    [{...actual}] = queue;

    const expected = {
        type: NEW_EVENT_REQUEST,
        isFetching: true
    };
    t.deepEqual(actual, expected, "newEvent return the NEW_EVENT_SUCCESS action");
    t.end();
});


const mockStore = configureMockStore([thunk]);



test.skip('testing the NEW_EVENT_REQUEST works as expected', (t) => {
    nock('http://localhost:8080')
        .post('/new-event', { state: "something" })
        .reply(201);

    const expectedActions = [
        {
            type: "NEW_EVENT",
            isFetching: true
        },
        {
            type: "NEW_EVENT_SUCCESS",
            isFetching: false,
            didSave: true
        }
    ];

    const store =  mockStore( { state: "" });

    return store.dispatch(newEventRequest({ state: 'something'}))
        .then( () => {
            t.deepEqual(store.getActions(), expectedActions, "actions returned correctly");
            t.end();
        });
});
