var getUserToken = require('../db/getUserToken.js');
var getFBFriends = require('../lib/getFBFriends.js');

exports.register = (server, options, next) => {

    server.route([{
        method: 'GET',
        path: '/new-event/invitees',
        config: {
            description: 'fetches facebook friends using this app',

            handler: (request, reply) => {

                getUserToken(request.query.sparkID, (error, token) => {

                    // if error, reply error
                    if (error) {
                        reply(error);
                    } else {

                        // get fb friend user information
                            // get id from fb itself
                            // get user info from db
                        getFBFriends(token, function (error, friends) {
                            
                            if (error) {
                                reply(error);
                            } else {
                                reply(friends);
                            }
                        });
                    }
                });
            }
        }
    }]);

    return next();
};

exports.register.attributes = {
    name: 'NewEventInvitees'
};
