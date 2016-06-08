var Server = require('./index.js');
var socketRouter = require('./socketRouter.js');
// var Hoek   = require('hoek');
var socket = require('socket.io');


var server = Server.init(process.env.PORT || 9000);

var io = socket(server.listener);

server.start((error) => {
    if (error) {
        throw new Error("Could not start server:", error);
    }
    console.info('🌍 The server is running on: ', server.info.uri);
});


module.exports = {
    io: io
};
