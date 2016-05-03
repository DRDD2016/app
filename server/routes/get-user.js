var getUser = require('../db/getUser.js');

exports.register = (server, options, next) => {

    server.route([{
        method: 'GET',
        path: '/get-user',
        config: {
            description: 'get user details and pass it down in the response',

            handler: (request, reply) => {

                getUser(request.query.sparkID, (error, userData) => {

                    var response = error || userData;
                    console.log(response, "REPSONSE FROM GETUSER");
                    reply(response);
                });
            }
        }
    }]);
    return next();
};

exports.register.attributes = {
    name: 'GetUser'
};
