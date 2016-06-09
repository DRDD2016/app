var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();
var io = require('./index.js');

var getNotificationsHandler = require('./routes/get-notifications.js');


emitter.on('new-notifications', () => {
    console.info("A NEW NOTIFICATION APPEARED");
});

module.exports = emitter;
