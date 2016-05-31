exports.register = (server, options, next) => {

    server.route([
        {
            method: 'GET',
            path: '/{all*}',
            config: {
                description: 'exists to configure React Router\'s browserHistory',

                handler: {
                    directory: {
                        path: "public"
                    }
                }
            }
        }
    ]);

    return next();
};

exports.register.attributes = {
    name: 'ForReactRouter'
};
