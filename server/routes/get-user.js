var getUser = require('../db/getUser.js');

exports.register = (server, options, next) => {

    server.route([{
        method: 'GET',
        path: '/get-user',
        config: {
            description: 'get user details and pass it down in the response',

            handler: (request,reply) => {

                var id = request.query.sparkID;

                getUser(id, (userData) => {

                    reply(userData);
                });
            }
        }
    }]);
    return next();
};

exports.register.attributes = {
    name: 'GetUser'
};