exports.register = function(server, options, next) {

    server.route([{
        method: 'GET',
        path: '/new-event',
        config: {
            description: 'return the home page',

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
