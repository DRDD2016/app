exports.register = (server, options, next) => {

    server.route([
        {
            method: 'GET',
            path: '/',
            config: {
                description: 'return the home page',

                handler: (request, reply) => {
                
                    reply.file('index.html');
                }
            }
        },
        {
            method: 'GET',
            path: '/bundle.js',
            config: {
                description: 'return the javascript bundle',

                handler: (request, reply) => {

                    reply.file('bundle.js');
                }
            }
        }
    ]);

    return next();
};

exports.register.attributes = {
    name: 'Home'
};
