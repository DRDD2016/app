var getNotifications = require('../db/getNotifications.js');
// var ioEmitter = require('socket.io-emitter')({ host: 'localhost', port: 6379 });

exports.register = (server, options, next) => {

    server.route([{
        method: 'GET',
        path: '/get-notifications',
        config: {
            description: 'get user notifications from the db and push to front end',

            handler: (request, reply) => {

                getNotifications(request.query.userID, (error, notifications) => {
                    // console.log("IO EMITTER:", Object.keys(ioEmitter));
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
