var client = require('../db/init.js');

function createEventTypeObject (event) {
    var targets = ['eventWhat', 'eventWhere', 'eventWhen'];
    return targets.reduce((eventType, target, i) => {
        if (event[target].length > 1) {
            eventType[target] = new Array(event[target].length).fill(0);
        }
        return eventType;
    }, {});
}


function getDataFromDB (setKey, callback) {
    client.scard(setKey, (err, voteNum) => {
        callback(err, voteNum);
    });
}

function recurseThroughVotes (array, eventID, eventType, callback, index, mappedArray) {

    if (!index && !mappedArray) {
        index = 0;
        mappedArray = [];
    }
    if (index === array.length) {
        return callback(null, mappedArray);
    } else {
        var setKey = "vote:" + eventID + "|" + eventType + ":" + index;

        getDataFromDB(setKey, (err, voteNum) => {
            if (err) {
                console.log(err,'erroro');
                return callback(err);
            }
            mappedArray.push(voteNum);
            return recurseThroughVotes(array, eventID, eventType, callback, ++index, mappedArray);

        });
    }


}

function getUserVotes (event, eventID, callback) {

    var setVote = createEventTypeObject(event);
    var eventTypeArray = Object.keys(setVote);

    eventTypeArray.forEach((eventType, i) => {

        recurseThroughVotes(setVote[eventType], eventID, eventType, (err, mappedArray) => {
            setVote[eventType] = mappedArray;
            if ((eventTypeArray.length - 1) === i) {
                callback(setVote);
            }
        });
    });

}



module.exports = getUserVotes;
