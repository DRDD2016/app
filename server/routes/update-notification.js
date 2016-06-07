var markNotificationAsViewed = require('../db/markNotificationAsViewed.js');

exports.register = (server, options, next) => {

    server.route([{
        method: 'GET',
        path: '/update-notification',
        config: {
            description: 'update an existing notification as the user has now clicked it.',

            handler: (request, reply) => {
                markNotificationAsViewed(request.query.index, request.query.userID, (error, response) => {
                    
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
