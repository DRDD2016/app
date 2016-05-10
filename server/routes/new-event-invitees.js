var getUserToken = require('../db/getUserToken.js');
var getFBFriends = require('../lib/getFBFriends.js');

exports.register = (server, options, next) => {

    server.route([{
        method: 'GET',
        path: '/new-event/invitees',
        config: {
            description: 'fetches facebook friends using this app',

            handler: (request, reply) => {

                getUserToken(request.query.userID, (error, token) => {

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
