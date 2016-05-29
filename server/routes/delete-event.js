var deleteEvent = require('../db/delete-event.js');
var getEvent = require('../db/getEvent.js');
var deleteEventFromCalendar = require('../db/deleteEventFromCalendar.js');

exports.register = (server, options, next) => {

    server.route([{
        method: 'GET',
        path: '/delete-event',
        config: {
            description: 'delete the event from the database',

            handler: (request, reply) => {


                deleteEvent(request.query.eventID, (error, response) => {

                    if (error) {
                        reply(error);
                    }

                    getEvent(eventID, (error, event) => {

                        if (error) {
                            reply(error);
                        }

                        var users = event.invitees.map((invitee) => {
                            return invitee.id;
                        }).concat([event.hostID]);

                        deleteEventFromCalendar(users, request.query.eventID, (error, success) => {

                            const verdict = error || response;
                            reply(verdict);

                        });
                    });



                });
            }
        }
    }]);
    return next();
};

exports.register.attributes = {
    name: 'DeleteEvent'
};
