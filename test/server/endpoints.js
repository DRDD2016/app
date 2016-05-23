import test from 'tape';
import server from '../../server/index.js';
import client from '../../server/db/init.js';
import parseObjectValues from '../../server/lib/parseObjectValues.js';
import * as fixtures from '../utils/fixtures.js';

server.init(9001, (error, server) => {

    test('`/` endpoint works', (t) => {

        if (!process.env.DEVELOPMENT) {
            throw new Error("Please set testing environment variables");
        }

        const options = {
            method: 'GET',
            url: '/'
        };

        server.inject(options, (response) => {

            t.ok(response.payload.indexOf('<title>Spark</title>') > -1, "index page loads");
            t.end();
        });
    });

    test('`get-user` retrieves user information from database EXCLUDING token', (t) => {

        const options = {
            method: 'GET',
            url: '/get-user?userID=12345678'
        };

        server.inject(options, (response) => {

            t.deepEqual(response.result, fixtures.Harry, "Correct user information retrieved");
            t.end();
        });
    });

    test.skip('`/get-notifications` works', (t) => {

        const options = {
            method: 'GET',
            url: '/get-notifications?userID=12345678'
        };

        server.inject(options, (response) => {

            const actual = JSON.parse(response.payload);
            const expectedKeys = Object.keys(fixtures.eventPollSohilNotification);

            t.ok(Array.isArray(actual), 'An array is returned');
            t.equal(typeof actual[0], 'object', 'An array of notification objects is returned');

            expectedKeys.forEach((expectedKey) => {

                t.ok(actual[0].hasOwnProperty(expectedKey), `The '${expectedKey}' key exists`);
            });
            t.end();
        });
    });

    test('`get-calendar` works', (t) => {

        const options = {
            method: 'GET',
            url: '/get-calendar?userID=' + fixtures.SOHIL_ID
        };

        server.inject(options, (response) => {

            const result = response.result;
            const expectedKeys = Object.keys(fixtures.eventConfirmedHarry);

            t.ok(Array.isArray(result), 'An array is returned');
            t.equal(typeof result[0], 'object', 'An array of calendar objects is returned');

            expectedKeys.forEach((expectedKey) => {

                t.ok(result[0].hasOwnProperty(expectedKey), `The '${expectedKey}' key exists`);
            });
            t.end();
        });
    });

    test('`new-event` adds a poll event', (t) => {

        const options = {
            method: 'POST',
            url: '/new-event',
            payload: fixtures.eventPollSohil
        };

        server.inject(options, (response) => {

            t.ok(response.result, 'truthiness is returned');
            client.exists('calendar:' + fixtures.HARRY_ID, (error, response) => {
                /* TEARDOWN
                - decrement eventKeys
                - delete event
                - delete notification
                */
                client.decr('eventKeys');
                client.del('event:301');
                client.spop('notifications:12345678');
                t.end();
            });
        });
    });

    test('`new-event` adds a confirmed event', (t) => {

        const options = {
            method: 'POST',
            url: '/new-event',
            payload: fixtures.eventConfirmedHarry
        };

        server.inject(options, (response) => {

            t.ok(response.result, 'truthiness is returned');
            /* TEARDOWN
            - decrement eventKeys
            - delete event
            - delete notification
            */
            client.decr('eventKeys');
            client.del('event:101');
            client.del('notifications:' + fixtures.SOHIL_ID);
            client.del('calendar:12345678');
            client.del('calendar:' + fixtures.SOHIL_ID);
            t.end();
        });
    });

    test.skip('`new-event-invitees` works', (t) => {
        /* ADD REAL FRIENDS TO DB */
        const options = {
            method: 'GET',
            url: '/new-event/friends?userID=' + fixtures.SOHIL_ID
        };

        server.inject(options, (response) => {

            t.end();
        });
    });

    test('`get-event` works', (t) => {

        const options = {
            method: 'GET',
            url: '/get-event?eventID=' + fixtures.eventConfirmedHarryEventID + '&userID=' + fixtures.SOHIL_ID
        };
        let eventObjectKeys = Object.keys(fixtures.eventConfirmedHarry);
        eventObjectKeys.push('eventID');
        server.inject(options, (response) => {

            Object.keys(response.result.event).forEach((key) => {

                t.ok(eventObjectKeys.indexOf(key) !== -1, `'${key}' exists in event object`);
            });
            t.equal(response.statusCode, 200, '200 status code');
            t.end();
        });
    });

    test('`confirm-poll` works', (t) => {

        const options = {
            method: 'POST',
            url: '/confirm-poll',
            payload: {
                userID: '12345678',
                eventID: 'event:300',
                poll: fixtures.eventPollSohilVoted
            }
        };

        server.inject(options, (response) => {

            t.ok(1, 'Successful POST request');
            t.end();
        });
    });

    test('`confirm-event` works', (t) => {

        const hostEventChoices = {
            eventWhat: 0,
            eventWhere: 1,
            eventWhen: 1
        };
        const options = {
            method: 'POST',
            url: '/confirm-event',
            payload: {
                hostEventChoices,
                eventID: 'event:400',
                poll: fixtures.eventPollSohilVoted
            }
        };

        const expected = fixtures.pollToConfirmedEventAfter;
        const inviteeID = fixtures.pollToConfirmedEvent.invitees[0].id;

        server.inject(options, (response) => {

            t.ok(1, 'Successful POST request');
            client.hgetallAsync('event:400')
                .then((event) => {

                    t.deepEqual(parseObjectValues(event), expected, 'Event is successfully confirmed');

                    client.smembers('calendar:' + inviteeID, (error, calendar) => {

                        const latestCalendarEntry = calendar.filter((item) => {
                            return item === 'event:400';
                        });
                        t.equal(latestCalendarEntry[0], 'event:400', 'A calendar item was created');

                        client.smembers("notifications:" + inviteeID, (error, notifications) => {

                            var latestNotification = notifications.map((item) => {

                                return JSON.parse(item);
                            }).filter((item) => {
                                console.log(item.eventID);
                                return item.eventID === 'event:400';
                            });
                            // t.equal(slatestNotification, 'event:400', 'A notification was created');
                            client.del('event:400');
                            client.spop('calendar:' + inviteeID);
                            client.spop("notifications:" + inviteeID);
                            t.end();
                        });
                    });

                });
        });
    });
});
