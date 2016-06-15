var getNotifications = require('./db/getNotifications.js');
var pub = require('./init-socket.js').pub;
var sub = require('./init-socket.js').sub;

function socketRouter (io) {

    console.log("We made a connection!!!");
    io.emit('connected');

    io.on('join', (userID) => {
        var userIDArray = JSON.parse(userID);
        pub.publish("notify", JSON.stringify(userIDArray));
    });

    sub.on('message', (channel, message) => {

        if (channel === 'failure') {

            io.emit('failure', message);
        } else if (channel === 'notify') {

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

        console.info("DISCONNECTED");
    });
}

module.exports = {
    socketRouter: socketRouter,
    pub: pub,
    sub: sub
};
