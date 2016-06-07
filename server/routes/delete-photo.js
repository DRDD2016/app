var deletePhoto = require('../db/deletePhoto.js');

exports.register = (server, options, next) => {

    server.route([{
        method: 'POST',
        path: '/delete-photo',
        config: {
            description: 'add the given photo details to the deleted photo list for the given user',

            handler: (request, reply) => {
                var photo = request.payload.photo;
                var eventID = request.payload.eventID;
                var userID = request.payload.userID;

                deletePhoto(photo, eventID, userID, (error, response) => {

                    var verdict = error || response;
                    reply(verdict);
                });
            }
        }
    }]);
    return next();
};

exports.register.attributes = {
    name: 'DeletePhoto'
};
