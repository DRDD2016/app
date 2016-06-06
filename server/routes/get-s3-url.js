exports.register = (server, options, next) => {

    server.route([
        {
            method: 'GET',
            path: '/get-s3-url',
            config: {
                description: 'return the S3 pre-signed url',

                handler: (request, reply) => {

                    reply("this is the s3 url");
                }
            }
        }
    ]);

    return next();
};

exports.register.attributes = {
    name: 'GetS3URL'
};
