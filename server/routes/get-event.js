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
                getEvent(request.query.eventID)
                    .then((event) => {

                        //if userID and event.hostID is the same
                        var isHost = event.hostID === request.query.userID;

                        if (isHost && event.isPoll) {

                            getUserVotes(event, request.query.eventID, (setVoteObject) => {
                                reply( { event: event, tally: setVoteObject } );
                            });
                        }
                        if (isHost && !event.isPoll) {
                            //push the list of going/not-going etc here along with the event

                            reply( { event: event });
                        }
                        if (!isHost && event.isPoll) {

                            getUserPoll(event, request.query.eventID, request.query.userID, (setPollObject) => {
                                reply( { event: event, poll: setPollObject } );
                            });
                        }
                        if (!isHost && !event.isPoll) {
                            //push the users rsvp along with the event

                            reply( { event: event });
                        }


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
