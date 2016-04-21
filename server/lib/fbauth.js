exports.register = function(server, options, next) {

    server.route([{
        method: '*',
        path: '/bell/door',
        config: {
            auth: {
                strategy: 'facebook',
            },
            handler: (request,reply) => {

                if(!request.auth.isAuthenticated) {
                    return reply('Auth Failed due to: ' + request.auth.error.message).code(401);
                }

                return reply.redirect('/#/create-event');
            }
        }

    }]);

    return next();
};

exports.register.attributes = {
    name: 'FBAuth'
};
