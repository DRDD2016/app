var client = require('./init.js');

module.exports = castVote;

function castVote (poll, userID, eventID, callback, eventTypeArray, index) {

    if (eventTypeArray === undefined && index === undefined) {
        eventTypeArray = Object.keys(poll);
        index = 0;
    }

    var eventType = eventTypeArray[index];

    if (index === eventTypeArray.length) {
        return callback(null, true);
    }
    poll[eventType].forEach((vote, voteIndex) => {

        var setKey = "vote:" + eventID + "|" + eventType + ":" + voteIndex;
        if (vote) {

            client.sadd(setKey, userID, (error, response) => {
                if (error) {
                    return callback(new Error("Failed add vote"));
                }
            });
        } else {

            client.srem(setKey, userID, (error, response) => {
                if (error) {
                    return callback(new Error("Failed to remove vote"));
                }
            });
        }
    });
    return castVote(poll, userID, eventID, callback, eventTypeArray, ++index);
}
