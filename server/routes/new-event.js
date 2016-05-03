var saveNewEvent = require('../db/saveNewEvent.js');
var createNotification = require('../lib/createNotification.js');

exports.register = (server, options, next) => {

    server.route([{
        method: 'POST',
        path: '/new-event',
        config: {
            description: 'saves newly created events.',

            handler: (request, reply) => {

                var stringifiedData = stringifyObjectValues(request.payload);

                saveNewEvent(stringifiedData, (error, result) => {


                    if (error) {
                        reply(error);
                    }
                    createNotification(_, (error, result) => {
                        
                    })
                    // create notification object
                    // go to invitees list
                    // for each invitee, push new notification object

                });
            }
        }
    }]);

    return next();
};

exports.register.attributes = {
    name: 'NewEvent'
};

function stringifyObjectValues (object) {

    for (var value in object) {

        if (typeof object[value] === 'object') {
            object[value] = JSON.stringify(object[value]);
        }
    }
    return object;
}
