// import test from 'tape';
// var testServer = require('../../server/index.js');
//
// test.skip('`getUser` retrieves user information from database EXCLUDING token', (t) => {
//
//     if (!process.env.REDISCLOUD_URL) {
//         throw new Error("Please set the test db url");
//     }
//
//     const options = {
//         method: 'GET',
//         url: '/get-user?sparkID=12345678'
//     };
//
//     const expected = {
//         firstName: "Harry",
//         lastName: "Potter",
//         id: "87654321",
//         photoURL: "http://blog.mugglenet.com/wp-content/uploads/2014/03/harry-potter-and-the-goblet-of-fire-20050330083044751-e1394684064435.jpg"
//     };
//
//     testServer.init(9001, (error, server) => {
//
//         server.inject(options, (response) => {
//
//             t.deepEqual(response.result, expected, "Correct user information retrieved");
//         });
//         server.stop(t.end);
//     });
// });
