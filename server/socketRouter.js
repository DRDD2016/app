var getNotificationsHandler = require('./routes/get-notifications.js');
var io = require('./start.js');

function socketRouter (io) {

    io.on('get-notifications', (payload) => {
        console.log("getting notifications");
        getNotificationsHandler(io, payload.userID);
    });

}

module.exports = socketRouter;
