import test from 'tape';
import { ADD_INVITEE } from '../../../../src/js/actions/create-event.js';
import { addInvitee } from '../../../../src/js/actions/create-event.js';

test('addInvitee creates the correct action', (t) => {

    const data = {
        firstName: "harry",
        lastName: "potter",
        photoURL: "http",
        id: 12345678
    };
    const expected = {
        type: ADD_INVITEE,
        data: {
            firstName: "harry",
            lastName: "potter",
            photoURL: "http",
            id: 12345678
        },
        index: 0
    };
    const actual = addInvitee(data, 0);

    t.deepEqual(actual, expected);
    t.end();
});
