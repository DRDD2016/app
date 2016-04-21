var Hapi  = require('hapi');
var Inert = require('inert');

var Home  = require('./home.js');
var NewEvent = require('./new-event.js');
exports.init = function(port, next) {

    var server = new Hapi.Server();
    server.connection({port: port});
    server.register([Inert, Home, NewEvent], function(err) {
        if(err) {
            return next(err);
        }

        server.start(function(err) {
            if(err) console.log('error starting server: ', err);
            return next(err, server);
        });
    });
    module.exports = server;
};
