var getNotificationsHandler = require('./routes/get-notifications.js');
var io = require('./start.js');

function socketRouter (io) {
    console.log("socket.id:" + io.id);

    io.on('initialising', (userID) => {

        console.log(`User ${userID} has connected`);
    });

    io.on('get-notifications', (payload) => {
        console.log("getting notifications");
        // getNotificationsHandler(io, payload.userID);
    });
}

module.exports = socketRouter;
