
exports.register = (server, options, next) => {

    server.route([{
        method: 'GET',
        path: '/delete-event',
        config: {
            description: 'delete the event from the database',

            handler: (request, reply) => {

                console.log(request.query.eventID);
                //do delete function
                reply('you have the eventID');
            }
        }
    }]);
    return next();
};

exports.register.attributes = {
    name: 'DeleteEvent'
};
