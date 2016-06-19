var getUserToken = require('../db/getUserToken.js');
var getFBFriends = require('../lib/getFBFriends.js');
var isValidUserID = require('../lib/isValidUserID.js');

exports.register = (server, options, next) => {

    server.route([{
        method: 'GET',
        path: '/new-event/friends',
        config: {
            description: 'fetches facebook friends using this app',

            handler: (request, reply) => {

                if (!isValidUserID(request.query.userID)) {
                    throw new Error('Invalid userID');
                }

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
    name: 'NewEventFriends'
};
