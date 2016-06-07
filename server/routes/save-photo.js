var savePhotoToDB = require('../db/savePhotoToDB');
var getEventPhotos = require('../db/getEventPhotos.js');


exports.register = (server, options, next) => {

    server.route([{
        method: 'POST',
        path: '/save-photo',
        config: {
            description: 'Uploading photo to backend',
            handler: (request, reply) => {

                var eventID = request.payload.eventID;
                var photoURL = request.payload.photoURL;
                var userID = request.payload.userID;
                savePhotoToDB(eventID, photoURL, userID, (error, response) => {

                    if (error) {
                        reply(error);
                    }

                    getEventPhotos(eventID, (error, photos) => {

                        var verdict = error || photos;
                        reply(verdict);
                    });
                });
            }
        }
    }]);
    return next();
};

exports.register.attributes = {
    name: 'SavePhoto'
};
