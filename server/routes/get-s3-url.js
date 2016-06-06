var getSignedURL = require('../s3/getSignedURL.js');

exports.register = (server, options, next) => {

    server.route([
        {
            method: 'GET',
            path: '/get-s3-url',
            config: {
                description: 'return the S3 pre-signed url',

                handler: (request, reply) => {

                    var filename = request.query.filename;
                    var filetype = request.query.filetype;
                    var eventID = request.query.eventID;

                    getSignedURL(filename, filetype, eventID, (error, signedURL) => {

                        var verdict = error || signedURL;
                        reply(verdict);
                    });
                }
            }
        }
    ]);

    return next();
};

exports.register.attributes = {
    name: 'GetS3URL'
};
