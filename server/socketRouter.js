// var getNotificationsHandler = require('./routes/get-notifications-socket.js');
var getNotifications = require('./db/getNotifications.js');
var redis = require('redis');
var pub, sub;

function socketRouter (io) {

    pub = redis.createClient(),
    sub = redis.createClient();
    console.log("We made a connection!!!");
    io.emit('connected');

    io.on('join', (userID) => {

        sub.subscribe("notify");
        pub.publish("notify", userID);
        console.log("subscribed user " + userID + " to notify");
    });

    sub.on('message', (channel, message) => {

        if (channel === 'failure') {

            io.emit('failure', message);
        } else if (channel === 'notify') {
            console.log("time to notify");
            getNotifications(message, (error, notifications) => {

                if (error) {

                    pub.publish('failure', error);
                } else {

                    io.emit('notifications', notifications);
                }
            });
        }
    });

    io.on('disconnect', (socket) => {

        pub.quit();
        sub.unsubscribe();
        sub.quit();
        console.log("DISCONNECTED");
    });
}

module.exports = socketRouter;
