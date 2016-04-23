import test from 'tape';
var testServer = require('../../server/index.js');
var server = testServer.init(9001);

test('`get-user` request fetches user information from database', (t) => {

    const options = {
        method: 'GET',
        url: '/get-user?sparkID=10153623802657825'
    };

    server.inject(options, (response) => {

        t.equal(response.result.id, "10153623802657825", "User information retrieved");
    });
    server.stop(t.end);
});
