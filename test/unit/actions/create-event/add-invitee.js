import test from 'tape';
import { ADD_INVITEE } from '../../../../src/js/actions/add-invitee.js';
import { addInvitee } from '../../../../src/js/actions/add-invitee.js';

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
        }
    };
    const actual = addInvitee(data);

    t.deepEqual(actual, expected);
    t.end();
});
