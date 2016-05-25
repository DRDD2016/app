var deleteEvent = require('../db/delete-event.js');

exports.register = (server, options, next) => {

    server.route([{
        method: 'GET',
        path: '/delete-event',
        config: {
            description: 'delete the event from the database',

            handler: (request, reply) => {


                deleteEvent(request.query.eventID, (error, response) => {
                    const verdict = error || response
                    console.log(verdict,'response.....');
                    reply(verdict);
                });
            }
        }
    }]);
    return next();
};

exports.register.attributes = {
    name: 'DeleteEvent'
};
