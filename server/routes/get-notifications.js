var getNotifications = require('../db/getNotifications.js');

exports.register = (server, options, next) => {

    server.route([{
        method: 'GET',
        path: '/get-notifications',
        config: {
            description: 'get user notifications from the db and push to front end',

            handler: (request, reply) => {

                getNotifications(request.query.sparkID, (error, notifications) => {
                    console.log(error, notifications);
                    var response = error || notifications;
                    reply(response);
                });
            }
        }
    }]);
    return next();
};

exports.register.attributes = {
    name: 'GetNotifications'
};
