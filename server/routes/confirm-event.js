
exports.register = (server, options, next) => {

    server.route([{
        method: 'POST',
        path: '/confirm-event',
        config: {
            description: 'event confirmation from host, change poll to host, propogate notifications that an event has been created, create RSVP section as well',

            handler: (request, reply) => {

                console.log(request.payload.eventID);
                console.log(request.payload.hostEventChoices);

                reply("made it to backend!!!");
            }
        }
    }]);
    return next();
};

exports.register.attributes = {
    name: 'ConfirmEvent'
};
