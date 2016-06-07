var getUserToken = require('../db/getUserToken.js');
var sharePhotoToFB = require('../lib/sharePhotoToFB.js');

exports.register = (server, options, next) => {

    server.route([{
        method: 'POST',
        path: '/share-photo',
        config: {
            description: 'Uploading photo to backend',
            handler: (request, reply) => {
                var photoURL = request.payload.photoURL;
                var userID = request.payload.userID;

                getUserToken(userID, (error, userToken) => {
                    if (error) {
                        reply(error);
                    }

                    sharePhotoToFB(userToken, photoURL, (error, response) => {

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
    name: 'SharePhoto'
};
