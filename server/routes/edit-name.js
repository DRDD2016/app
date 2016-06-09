var editName = require('../db/editName.js');

exports.register = (server, options, next) => {

    server.route([{
        method: 'POST',
        path: '/edit-name',
        config: {
            description: 'edits the user firstname and last name in database',

            handler: (request, reply) => {

                var userID = request.payload.userID;
                var firstName = request.payload.firstName;
                var lastName = request.payload.lastName;

                editName(userID, firstName, lastName, (error, response) => {

                    var verdict = error || response;
                    reply(verdict);
                });
            }
        }
    }]);
    return next();
};

exports.register.attributes = {
    name: 'EditName'
};
