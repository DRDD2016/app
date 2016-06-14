var Server = require('./index.js');
var socket = require('socket.io');
var server = Server.init(process.env.PORT || 9000);
var socketRouter = require('./socketRouter.js');

var io = socket(server.listener);
io.of('/feed').on('connection', socketRouter);

server.start((error) => {
    if (error) {
        throw new Error("Could not start server:", error);
    }
    console.info('🌍 The server is running on: ', server.info.uri);
});
