var path = require('path');
var Hapi  = require('hapi');
var Bell = require('bell');
var plugins = require('./plugins.js');
var authenticateUser = require('./lib/authenticateUser.js');

exports.init = (port, callback) => {

    var server = new Hapi.Server({
        connections: {
            routes: {
                files: {
                    relativeTo: path.join(__dirname, '/../public')
                }
            }
        }
    });
    server.connection({
        host: "0.0.0.0",
        port: port,
        routes: { cors: true }
    });

    server.register([Bell], (err) => {

        if (err) {
            throw new Error(err);
        }

        server.auth.strategy('facebook', 'bell', {
            provider: 'facebook',
            password: 'cookie_encryption_password_secure',
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            isSecure: false,
            scope: ['user_friends', 'user_about_me', 'publish_actions']
        });
    });

    server.register(plugins, (err) => {

        if (err) {
            throw new Error(err);
        }
        server.route([{
            method: ['GET', 'POST'],
            path: '/bell/door',
            config: {
                auth: {
                    strategies: ['facebook']
                },
                handler: authenticateUser
            }
        }]);
    });
    callback(null, server);
};
