var uploadToS3 = require('../s3/uploadToS3.js');

exports.register = (server, options, next) => {

    server.route([{
        method: 'POST',
        path: '/upload-photo',
        config: {
            description: 'Uploading photo to backend',

            handler: (request, reply) => {

                //GET EVENT ID AND PHOTO FROM THE REQUEST OBJECT
                uploadToS3(request.payload.photo, request.payload.eventID, (error, data) => {

                    reply('data has been uploaded to s3!');

                    //next step use the data.url to push to list item photos:eventID
                });

                // push photo to S3
                // Save URL for photo in DB list for that event - photos:event:1
                // need to create lists for each of invitee.

            }
        }
    }]);
    return next();
};

exports.register.attributes = {
    name: 'UploadPhoto'
};
