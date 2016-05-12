import test from 'tape';
var testServer = require('../../server/index.js');

test('`getUser` retrieves user information from database EXCLUDING token', (t) => {

    if (!process.env.DEVELOPMENT) {
        throw new Error("Please set the test db url");
    }

    const options = {
        method: 'GET',
        url: '/get-user?userID=12345678'
    };

    const expected = {
        firstName: "Harry",
        lastName: "Potter",
        id: "12345678",
        photoURL: "http://harrypotter.com/photo.jpg"
    };

    testServer.init(9001, (error, server) => {

        server.inject(options, (response) => {

            t.deepEqual(response.result, expected, "Correct user information retrieved");
        });
        server.stop(t.end);
    });
});
