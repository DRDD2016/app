import test from 'tape';
import { HYDRATE_EDIT_EVENT } from '../../../../src/js/actions/create-event.js';
import { hydrateEditEvent } from '../../../../src/js/actions/create-event.js';
import { eventConfirmedHarry as data } from '../../../utils/fixtures.js';

test('hydrateEditEvent creates the correct action', (t) => {

    const data = data;
    const expected = {
        type: HYDRATE_EDIT_EVENT,
        data: data,
    };
    const actual = hydrateEditEvent(data);

    t.deepEqual(actual, expected);
    t.end();
});
