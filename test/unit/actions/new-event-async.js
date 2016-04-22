import test from 'tape';
import { newEventRequest } from '../../../src/js/actions/create-event.js';
import configureMockStore from 'redux-mock-store';
import nock from 'nock';
import thunk from 'redux-thunk';


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
