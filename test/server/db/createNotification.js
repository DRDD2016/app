import test from 'tape';
import createNotification from '../../../server/lib/createNotification.js';

test('createNotification returns a valid notification object for a poll event', (t) => {

    const expected = {
        isPoll: true,
        timestamp: Date.now(),
        eventID: "event:100",
        hostName: "Sohil Pandya",
        hostPhotoURL: "https://scontent.xx.fbcdn.net/v/t1.0-1/p320x320/12821522_10154022257850996_5243104697257562021_n.jpg?oh=3b82501dc03ce1aa1d0db64278f606fa&oe=57AC45AB"
    };
    const eventID = "event:100";
    const eventInfo = {
        hostID: 10154129575200996,
        eventName: "Sohil's bowling",
        eventDescription: "Let's go bowling",
        isPoll: true,
        eventWhat: {
            0: "Bowling",
            1: "Drinking"
        },
        eventWhen: {
            0: {
                date: "2016-11-01",
                time: "17:00"
            }
        },
        eventWhere: {
            0: {
                placeName: "TBC",
                placeAddress: ""
            }
        }
    };
    createNotification(eventID, eventInfo, (error, result) => {

        for (let key in result) {
            if (key === 'timestamp') {
                t.ok(result.timestamp <= (expected.timestamp + 1000), "timestamp within a one-second range");
            } else {
                t.equal(result[key], expected[key]);
            }
        }
        t.end();
    });
});