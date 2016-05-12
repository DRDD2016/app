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

                        if(event.hostID === request.query.userID) {


                            getUserVotes(event, request.query.eventID, (setVoteObject) => {
                                console.log(setVoteObject);
                                reply( { event: event, tally: setVoteObject } )
                            });
                        } else {
                            console.log('req',req);

                            getUserPoll(event, request.query.eventID, request.query.userID, (setPollObject) => {
                                console.log(setPollObject);
                                reply( { event: event, poll: setPollObject } );
                            });
                        }
                        //then create vote Object

                        // else
                            //create poll object


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
