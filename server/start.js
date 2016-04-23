var Server = require('./index.js');
var Hoek   = require('hoek');

Server.init(process.env.PORT || 9000, (err, server) => {

    Hoek.assert(!err, err); //hoek is for error handling
    console.log('The server is running on: ', server.info.uri);
});
