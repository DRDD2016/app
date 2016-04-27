import test from 'tape';
import reducer from '../../../../src/js/reducers/create-event.js';

test('Reducer handles ADD_INVITEE as expected', (t) => {
    const initialState = {
        invitees: []
    };

    const data = {
        firstName: "harry",
        lastName: "potter",
        photoURL: "http",
        id: 12345678
    };

    const action = {
        type: "ADD_INVITEE",
        data: data
    };

    const nextState = reducer(initialState, action);
    const expected = {
        invitees: [{
            firstName: "harry",
            lastName: "potter",
            photoURL: "http",
            id: 12345678
        }]
    };

    t.deepEqual(nextState, expected, "ADD_INVITEE sets state correctly");
    t.end();
});
