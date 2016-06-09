import test from 'tape';
// var testClient = require('../../server/db/init.js');

test.skip('`getUser` retrieves user information from database EXCLUDING token', (t) => {

    if (!process.env.DEVELOPMENT) {
        throw new Error("Please set the test db url");
    }
    const hashKey = "user:" + 12345678;
    testClient.hmsetAsync(hashKey,
                     'firstName', "Harry",
                     'lastName', "Potter",
                     'id', 12345678,
                     'token', "NitwitBlubberOddmentTweak",
                     'photoURL', "http://blog.mugglenet.com/wp-content/uploads/2014/03/harry-potter-and-the-goblet-of-fire-20050330083044751-e1394684064435.jpg")
        .catch((error) => {
            console.error('Error adding user to db:', error.cause);
        });

    const expected = {
        firstName: "Harry",
        lastName: "Potter",
        id: "87654321",
        photoURL: "http://blog.mugglenet.com/wp-content/uploads/2014/03/harry-potter-and-the-goblet-of-fire-20050330083044751-e1394684064435.jpg"
    };

    testServer.init(9001, (error, server) => {

        server.inject(options, (response) => {

            t.deepEqual(response.result, expected, "Correct user information retrieved");
        });
        
        server.stop(t.end);
    });
});
