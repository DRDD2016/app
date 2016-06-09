require('babel-register');
var getNotifications = require('../db/getNotifications.js');

function getNotificationsHandler (io, userID) {

    getNotifications(userID, (error, notifications) => {

        if (error) {
            io.emit('get-notifications-failure', error);
        } else {

            io.emit('get-notifications-success', notifications);
        }
    });
}

module.exports = getNotificationsHandler;
