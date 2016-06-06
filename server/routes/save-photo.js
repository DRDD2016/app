var savePhotoToDB = require('../db/savePhotoToDB');

exports.register = (server, options, next) => {

    server.route([{
        method: 'POST',
        path: '/save-photo',
        config: {
            description: 'Uploading photo to backend',
            handler: (request, reply) => {

                var eventID = request.payload.eventID;
                savePhotoToDB(request.payload.eventID, data.Location, request.payload.userID, (error, response) => {

                    var verdict = error || response;
                    reply(verdict);
                });
            }
        }
    }]);
    return next();
};

exports.register.attributes = {
    name: 'SavePhoto'
};
