var addUser = require('../db/addUser.js');
var getFBPhoto = require('./getFBPhoto.js');

function authenticateUser (request, reply) {

    if (!request.auth.isAuthenticated) {
        return reply('Auth failed due to: ' + request.auth.error.message).code(401);
    } else {

        getFBPhoto(request.auth.credentials.profile.id, request.auth.credentials.token, function (error, url) {
            if (error) {
                return reply(error);
            }
            addUser(request.auth.credentials, url, (error, result) => {

                if (error) {
                    reply(new Error("Could not register user"));
                } else {
                    reply.redirect('/feed')
                         .state('sparkID', request.auth.credentials.profile.id, { path: "/" });
                }
            });
        });

    }
}

module.exports = authenticateUser;
