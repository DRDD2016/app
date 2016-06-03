var uploadToS3 = require('../s3/uploadToS3.js');
var savePhotoToDB = require('../db/savePhotoToDB');
var tmp = require('tmp');
var fs = require('fs');

exports.register = (server, options, next) => {

    server.route([{
        method: 'POST',
        path: '/upload-photo',
        config: {
            description: 'Uploading photo to backend',

            handler: (request, reply) => {

                // var photoBuffer = new Buffer(request.payload.photo, 'base64');

                // tmp.dir(function _tempDirCreated (err, tempPath) {
                //     if (err) throw err;
                //     tmpath = tempPath;
                //     var fd = tmpath + '/' + Date.now();
                //
                //     fs.writeFile(__dirname + '/sohil.png', photoBuffer, function (err) {
                //         if (err) {
                //             console.log('error saving file');
                //         } else {
                //             console.log(fd,'after writefile');

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
                //
                //         }
                //     });
                // });

            }
        }
    }]);
    return next();
};

exports.register.attributes = {
    name: 'UploadPhoto'
};
