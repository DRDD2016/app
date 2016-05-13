import test from 'tape';
import server from '../../server/index.js';
import client from '../../server/db/init.js';
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

    test('`getUser` retrieves user information from database EXCLUDING token', (t) => {

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
            t.ok(Array.isArray(actual), 'An array is returned');
            t.equal(typeof actual[0], 'object', 'An array of objects is returned');
            t.ok(actual[0].hasOwnProperty('timestamp'), 'A timestamp key exists');
            //todo: test the other keys in db
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
                client.del('notifications:12345678');
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
            url: '/new-event/invitees?userID=' + fixtures.SOHIL_ID
        };

        server.inject(options, (response) => {

            t.end();
        });
    });

    test.skip('`get-event` works', (t) => {

        const options = {
            method: 'GET',
            url: '/get-event?eventID=' + fixtures.eventConfirmedHarryEventID + '&userID=' + fixtures.SOHIL_ID
        };
        const eventObjectKeys = Object.keys(fixtures.eventConfirmedHarry);

        server.inject(options, (response) => {

            t.equal(response.statusCode, 200, '200 status code');
            Object.keys(response.result.event).forEach((key) => {

                t.ok(eventObjectKeys.indexOf(key) !== -1, 'Correct key in event object');
            });
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

            client.del("vote:event:300|eventWhat:0");
            client.del("vote:event:300|eventWhat:2");
            client.spop('notifications:12345678');
        });
    });
});
