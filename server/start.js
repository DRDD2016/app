var Server = require('./index.js');
var Hoek   = require('hoek');

Server.init(process.env.PORT || 9000, (error, server) => {

    Hoek.assert(!error, error);
    return server.start((error) => {
        if (error) {
            throw new Error("Could not start server:", error);
        }
        console.info('🌍 The server is running on: ', server.info.uri);
    });
});
