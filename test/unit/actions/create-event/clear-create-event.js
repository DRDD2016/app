import test from 'tape';
import { CLEAR_CREATE_EVENT } from '../../../../src/js/actions/create-event.js';
import { clearCreateEvent } from '../../../../src/js/actions/create-event.js';

test('clearCreateEvent returns expected action', (t) => {

    let actual = clearCreateEvent();
    const expected = {
        type: CLEAR_CREATE_EVENT
    };
    t.deepEqual(actual, expected, "newEvent return the GET_FB_FRIENDS action");
    t.end();
});
