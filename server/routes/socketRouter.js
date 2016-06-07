var getNotifications = require('../db/getNotifications.js');


function socketRouter (io) {
    
    io.on('get-notifications', (payload) => {

        getNotifications(payload.userID, (error, notifications) => {

            if (error) {
                io.emit('get-notifications-failure', error);
            } else {

                io.emit('get-notifications-success', notifications);
            }
        });
    });
}

module.exports = socketRouter;
