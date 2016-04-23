exports.register = (server, options, next) => {

    server.route([{
        method: 'POST',
        path: '/new-event',
        config: {
            description: 'saves newly created events.',

            handler: (request,reply) => {
                console.log(request.payload);
                reply('done');
            }
        }

    }]);

    return next();
};

exports.register.attributes = {
    name: 'NewEvent'
};
