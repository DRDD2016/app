// var getNotificationsHandler = require('./routes/get-notifications-socket.js');
var getNotifications = require('./db/getNotifications.js');
var pub = require('./init-socket.js').pub;
var sub = require('./init-socket.js').sub;

function socketRouter (io) {

    console.log("We made a connection!!!");
    io.emit('connected');

    io.on('join', (data) => {
        var userIDArray = JSON.parse(data);
        userIDArray.push("stuff");
        console.log(Array.isArray(userIDArray));
        pub.publish("notify", JSON.stringify(userIDArray));
    });

    sub.on('message', (channel, message) => {

        if (channel === 'failure') {

            io.emit('failure', message);
        } else if (channel === 'notify') {
            console.log(">>>", message);
            console.log("time to notify", Array.isArray(message));

            JSON.parse(message).forEach((userID) => {

                getNotifications(userID, (error, notifications) => {

                    if (error) {

                        pub.publish('failure', error);
                    } else {

                        io.emit('notifications:' + userID, notifications);
                    }
                });
            });
        }
    });

    io.on('disconnect', (socket) => {

        // pub.quit();
        // sub.unsubscribe();
        // sub.quit();
        console.log("DISCONNECTED");
    });
}

module.exports = {
    socketRouter: socketRouter,
    pub: pub,
    sub: sub
};
