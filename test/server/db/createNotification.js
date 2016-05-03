import test from 'tape';
import createNotification from '../../../server/lib/createNotification.js';

test.only('createNotification returns a valid notification object', (t) => {

    const expected = {
        isPoll: true,
        timestamp: Date.now(),
        eventID: 1234,
        hostName: "Hermione Granger",
        hostPhotoURL: "url"
    };

    createNotification( (error, notification) => {

        t.deepEqual(notification, expected, "creates a valid notification object");
        t.end();
    });
});
