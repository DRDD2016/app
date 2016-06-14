var getNotificationsHandler = require('./routes/get-notifications.js');
var redis = require('redis');
var pub, sub;

function socketRouter (io) {

    pub = redis.createClient(),
    sub = redis.createClient();
    console.log("We made a connection!!!");
    io.emit('connected');

    io.on('join', () => {

        sub.subscribe("notify");
        console.log("subscribed to notify");
    });

    io.on('disconnect', (socket) => {

        pub.quit();
        sub.unsubscribe();
        sub.quit();
        console.log("DISCONNECTED");
    });
}

module.exports = socketRouter;
