import test from 'tape';
import setNotificationsForInvitees from '../../../server/db/setNotificationsForInvitees.js';
import client from '../../../server/db/init.js';


test("setNotificationsForInvitees adds the sets correctly for all invitees", (t) => {

    const invitees = [
        {
            id: 12345678
        },
        {
            id: 10154129575200996
        }
    ];

    const notification = {
        isPoll: true,
        timestamp: Date.now(),
        eventID: "event:100",
        hostName: "Sohil Pandya",
        hostPhotoURL: "https://scontent.xx.fbcdn.net/v/t1.0-1/p320x320/12821522_10154022257850996_5243104697257562021_n.jpg?oh=3b82501dc03ce1aa1d0db64278f606fa&oe=57AC45AB"
    };

    const expected = [JSON.stringify(notification)];
    setNotificationsForInvitees(invitees, notification, (error, result) => {
        t.ok(result, "both sets added for invitees");

        client.smembers('notification:12345678', (error, actual) => {
            t.notOk(error, "Notification saves without error");
            t.deepEqual(actual, expected, "returned stringified notification");
            t.end();
        });

    });
});

test('Deleting added notification set', (t) => {

    client.del("notification:12345678");

    t.end();
});
