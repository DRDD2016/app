var Hapi  = require('hapi');
var Inert = require('inert');
var Bell = require('bell');

var Home  = require('./routes/home.js');
var GetUser = require('./routes/get-user.js');
var NewEvent = require('./routes/new-event.js');
var NewEventInvitees = require('./routes/new-event-invitees.js');

var addUser = require('./db/addUser.js');
var getFBPhoto = require('./lib/getFBPhoto.js');


exports.init = (port, callback) => {

    var server = new Hapi.Server();
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

    server.register([Inert, Home, NewEvent, GetUser, NewEventInvitees], (err) => {

        if (err) {
            throw new Error(err);
        }
        server.route([{
            method: ['GET','POST'],
            path: '/bell/door',
            config: {
                auth: {
                    strategies: ['facebook']
                },
                handler: (request, reply) => {

                    if (!request.auth.isAuthenticated) {
                        return reply('Auth failed due to: ' + request.auth.error.message).code(401);
                    } else {

                        getFBPhoto(request.auth.credentials.profile.id, request.auth.credentials.token, function(url) {
                            addUser(request.auth.credentials, url, (error, result) => {

                                if (error) {
                                    reply(new Error("Could not register user"));
                                } else {                            
                                    reply.redirect('/#/feed')
                                         .state('sparkID', request.auth.credentials.profile.id, { path: "/" });
                                }
                            });
                        });

                    }
                }
            }
        }]);
    });
    callback(null, server);
};
