var Hapi  = require('hapi');
var Inert = require('inert');
var Bell = require('bell');
var AuthCookie = require('hapi-auth-cookie');

var FBAuth = require('./routes/fbauth.js');
var Home  = require('./routes/home.js');
var GetUser = require('./routes/GetUser.js');
var NewEvent = require('./routes/new-event.js');

var addUser = require('./db/addUser.js');
var getFBPhoto = require('./lib/getFBPhoto.js');


exports.init = (port, next) => {

    var server = new Hapi.Server();
    server.connection({
        host: "0.0.0.0",
        port: port,
        routes: { cors: true }
    });

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
        });
    });

    server.register([Inert, Home, NewEvent, GetUser], (err) => {
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
                        return reply('Auth failed due to: ' + request.auth.error.message).code(401);
                    } else {

                        getFBPhoto(request.auth.credentials.profile.id, request.auth.credentials.token, function(url) {
                            addUser(request.auth.credentials, url);
                        });
                        reply.redirect('/#/feed')
                             .state('sparkID', request.auth.credentials.profile.id, { path: "/" });
                    }
                }
            }
        }]);

        server.start((err) => {
            if (err) console.log('error starting server: ', err);
            return next(err, server);
        });
    });
    module.exports = server;
};
