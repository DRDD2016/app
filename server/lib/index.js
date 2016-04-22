var Hapi  = require('hapi');
var Inert = require('inert');
var Bell = require('bell');
var AuthCookie = require('hapi-auth-cookie');

var FBAuth = require('./fbauth.js');
var Home  = require('./home.js');
var NewEvent = require('./new-event.js');
exports.init = function(port, next) {

    var server = new Hapi.Server();
    server.connection({
        host: "0.0.0.0",
        port: port,
        routes: { cors: true }
    });


    // Declare an authentication strategy using the bell scheme
    // with the name of the provider, cookie encryption password,
    // and the OAuth client credentials.

    server.register([Bell, AuthCookie], () => {
        server.auth.strategy('sparkCookie', 'cookie', {
            password: 'cookie_encryption_password_secure',
            cookie: 'user',
            isSecure: false
        });
        server.auth.strategy('facebook', 'bell', {
            provider: 'facebook',
            password: 'cookie_encryption_password_secure',
            clientId: '612765462219386',
            clientSecret: '2880756f863270ac97a9500ef80f64a3',
            isSecure: false,
            scope: ['user_friends', 'user_about_me', 'publish_actions']
              // Terrible idea but required if not using HTTPS especially if developing locally
        });
    });

    server.register([Inert , Home, NewEvent], function(err) {
        if(err) {
            return next(err);
        }

        server.route([{
            method: ['GET','POST'],
            path: '/bell/door',
            config: {
                auth: {
                    strategies: ['sparkCookie','facebook']
                },
                handler: (request, reply) => {

                    if (!request.auth.isAuthenticated) {
                        return reply('Auth Failed due to: ' + request.auth.error.message).code(401);
                    } else {

                        console.log(request.auth.credentials,'----creds-----');

                        reply.redirect('/#/feed')
                             .state('sparkToken', request.auth.credentials.token, { path: "/" });
                    }
                }
            }
        },
        {
            method: "GET",
            path: '/sohil',
            handler: (request,reply) => {
                reply('hello sohil');
            }
        }]);


        server.start(function(err) {
            if(err) console.log('error starting server: ', err);
            return next(err, server);
        });
    });
    module.exports = server;
};
