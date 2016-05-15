var getEvent = require('../db/getEvent.js');
var getUserVotes = require('../lib/getVotes.js');
var getUserPoll = require('../lib/getPolls.js');

exports.register = (server, options, next) => {

    server.route([{
        method: 'GET',
        path: '/get-event',
        config: {
            description: 'get the requested event',

            handler: (request, reply) => {

                getEvent(request.query.eventID, (error, event) => {

                    if (error) {
                        return reply(error);
                    }

                    if (event.hostID === request.query.userID) {


                        getUserVotes(event, request.query.eventID, (setVoteObject) => {

                            reply( { event: event, tally: setVoteObject } );
                        });
                    } else {

                        getUserPoll(event, request.query.eventID, request.query.userID, (setPollObject) => {

                            reply( { event: event, poll: setPollObject } );
                        });
                    }
                });
            }
        }
    }]);
    return next();
};

exports.register.attributes = {
    name: 'GetEvent'
};
