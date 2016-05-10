var getUser = require('../db/getUser.js');

exports.register = (server, options, next) => {

    server.route([{
        method: 'GET',
        path: '/get-user',
        config: {
            description: 'get user details from database',

            handler: (request, reply) => {

                getUser(request.query.userID)
                .then((userData) => {

                    reply(userData);
                })
                .catch((error) => {
                    console.error("Error getting user info from database:", error);
                    callback(error);
                });
            }
        }
    }]);
    return next();
};

exports.register.attributes = {
    name: 'GetUser'
};
