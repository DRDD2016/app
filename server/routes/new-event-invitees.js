var getUserToken = require('../db/getUserToken.js');
var getFBFriends = require('../lib/getFBFriends.js');

exports.register = (server, options, next) => {

    server.route([{
        method: 'GET',
        path: '/new-event/invitees',
        config: {
            description: 'fetches facebook friends using this app',

            handler: (request, reply) => {

                /*
                - get current user's token
                - get the user's facebook friends
                    - for each friend, get details from database
                */

                getUserToken(request.query.sparkID, (error, token) => {

                    if (error) {
                        reply(error);
                    } else {

                        getFBFriends(token, function (error, friends) {

                            var verdict = error || friends;
                            reply(verdict);
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
