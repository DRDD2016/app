var saveNewEvent = require('../db/saveNewEvent.js');

exports.register = (server, options, next) => {

    server.route([{
        method: 'POST',
        path: '/new-event',
        config: {
            description: 'saves newly created events.',

            handler: (request, reply) => {

                var stringifiedData = stringifyObjectValues(request.payload);

                saveNewEvent(stringifiedData, (error, result) => {

                    var verdict = error || result;
                    reply(verdict);
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
