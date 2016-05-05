var getEvent = require('../db/getEvent.js');

exports.register = (server, options, next) => {

    server.route([{
        method: 'GET',
        path: '/get-event',
        config: {
            description: 'get the requested event',

            handler: (request, reply) => {

                getEvent(request.query.eventID)
                    .then((event) => {
                        return reply(event);
                    })
                    .catch((error) => {

                        return reply(error);
                    });
            }
        }
    }]);
    return next();
};

exports.register.attributes = {
    name: 'GetEvent'
};
