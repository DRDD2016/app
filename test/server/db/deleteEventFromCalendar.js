import test from 'tape';
import deleteEventFromCalendar from '../../../server/db/deleteEvent.js';
import client from '../../../server/db/init.js';
import * as fixtures from '../../utils/fixtures.js';

test('deleteEvent deletes the correct event', (t) => {

    deleteEventFromCalendar("event:500", (error, actual) => {

        t.deepEqual(actual, 1, 'Correct event is retrieved');
        t.end();
    });
});
