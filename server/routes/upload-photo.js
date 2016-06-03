var uploadToS3 = require('../s3/uploadToS3.js');
var savePhotoToDB = require('../db/savePhotoToDB');

exports.register = (server, options, next) => {

    server.route([{
        method: 'POST',
        path: '/upload-photo',
        config: {
            description: 'Uploading photo to backend',

            handler: (request, reply) => {


                uploadToS3(request.payload.photo, request.payload.eventID, (error, data) => {

                    if (error) {
                        console.error(error);
                        reply(error);
                    }

                    savePhotoToDB(request.payload.eventID, data.Location, request.payload.userID, (error, response) => {

                        var verdict = error || response;
                        reply(verdict);
                    });
                });
            }
        }
    }]);
    return next();
};

exports.register.attributes = {
    name: 'UploadPhoto'
};
