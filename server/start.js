var Server = require('./index.js');
var Hoek   = require('hoek');

Server.init(process.env.PORT || 9000, (error, server) => {

    Hoek.assert(!error, error);
    server.start((error) => {
        if (error) {
            throw new Error("Could not start server:", error);
        }
        console.log('🌍 The server is running on: ', server.info.uri);
    });
});
