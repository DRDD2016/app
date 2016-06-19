var markNotificationAsViewed = require('../db/markNotificationAsViewed.js');
var pub = require('../init-socket.js').pub;


exports.register = (server, options, next) => {

    server.route([{
        method: 'GET',
        path: '/update-notification',
        config: {
            description: 'update an existing notification as the user has now clicked it.',

            handler: (request, reply) => {
                var recipients = [request.query.userID];
                markNotificationAsViewed(request.query.index, request.query.userID, (error, response) => {
                    if (!error) {
                        pub.publish('notify', JSON.stringify(recipients));
                    }
                    var verdict = error || response;

                    reply(verdict);
                });
            }
        }
    }]);
    return next();
};

exports.register.attributes = {
    name: 'UpdateNotification'
};
