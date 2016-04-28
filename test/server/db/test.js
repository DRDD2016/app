import test from 'tape';
import client from '../../../server/db/init.js';
import saveNewEvent from '../../../server/db/saveNewEvent.js';

test('New event is set correctly', (t) => {

    const eventWhat = JSON.stringify({
        0: "Bowling",
        1: "Swimming"
    });
    const eventWhere = JSON.stringify({
        0: {
            placeName: "Harrods",
            placeAddress: "Knightsbridge, London"
        }
    });
    const eventWhen = JSON.stringify({
        0: {
            date: "2016-11-10",
            time: "12:00"
        }
    });
    const invitees = JSON.stringify([12345678]);
    const hostID = 10154129575200996;
    const isPoll = true;

    const event = {
        eventWhat,
        eventWhere,
        eventWhen,
        invitees,
        hostID,
        isPoll
    };

    saveNewEvent(event, (error, result) => {
        t.notOk(error, "New event saves without error");
        t.end();
    });
    const actual = client.hmset("event:1", "eventName", "Tormod's birthday bash",
                                "eventDescription", "Let's have a ball!",
                                "eventWhat", eventWhat, "eventWhere", eventWhere, "eventWhen", eventWhen,
                                "invitees", invitees, "hostID", hostID, "isPoll", isPoll,
                                (error, reply) => {
                                    console.log(error, reply);
                                });
});

test('TEST TEARDOWN', (t) => {

    t.end();
    client.quit();
});
