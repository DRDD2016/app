require('babel-register');
var getNotifications = require('../db/getNotifications.js');

function getNotificationsHandler (userID) {

    getNotifications(userID, (error, notifications) => {

        if (error) {
            callback(error);
        } else {
            callback(null, notifications);
        }
    });
}

module.exports = getNotificationsHandler;
