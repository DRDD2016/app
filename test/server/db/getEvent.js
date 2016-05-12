import test from 'tape';
import getEvent from '../../../server/db/getEvent.js';
import client from '../../../server/db/init.js';
import * as fixtures from '../../utils/fixtures.js';

test('getEvent retrieves the correct event', (t) => {

    getEvent("event:100")
        .then((actual) => {

            t.deepEqual(actual, fixtures.eventConfirmedHarry);
            t.equal(typeof actual.hostID, 'string', 'hostID kept as a string');
            t.equal(typeof actual.isPoll, 'boolean', 'isPoll parsed back to a boolean');
            t.equal(Array.isArray(actual.eventWhat), true, 'eventWhat parsed back to an array');
            t.equal(Array.isArray(actual.eventWhere), true, 'eventWhere parsed back to an array');
            t.equal(Array.isArray(actual.eventWhen), true, 'eventWhen parsed back to an array');
            t.end();
        });
});
