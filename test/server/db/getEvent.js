import test from 'tape';
import getEvent from '../../../server/db/getEvent.js';
import client from '../../../server/db/init.js';

test('getEvent retrieves the correct event', (t) => {

    const eventWhat = [
        "Bowling",
        "Swimming"
    ];
    const eventWhere = [
        {
            placeName: "Harrods",
            placeAddress: "Knightsbridge, London"
        }
    ];
    const eventWhen = [
        {
            date: "2016-11-10",
            time: "12:00"
        }
    ];
    const invitees = [
        {
            id: 12345678,
            firstName: "Harry",
            lastName: "Potter",
            photoURL: "http://harrypotter.com/image.jpg"
        }
    ];
    const hostID = '10154129575200996';
    const isPoll = true;

    const expected = {
        eventWhat,
        eventWhere,
        eventWhen,
        invitees,
        hostID,
        isPoll
    };

    getEvent("event:101")
        .then((actual) => {

            t.deepEqual(actual, expected);
            t.equal(typeof actual.hostID, 'string', 'hostID kept as a string');
            t.equal(typeof actual.isPoll, 'boolean', 'isPoll parsed back to a boolean');
            t.equal(Array.isArray(actual.eventWhat), true, 'eventWhat parsed back to an array');
            t.equal(Array.isArray(actual.eventWhere), true, 'eventWhere parsed back to an array');
            t.equal(Array.isArray(actual.eventWhen), true, 'eventWhen parsed back to an array');
            t.end();
        });
});
