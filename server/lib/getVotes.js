var client = require('../db/init.js');

function createEventTypeObject (event) {
    var targets = ['eventWhat', 'eventWhere', 'eventWhen'];
    return targets.reduce((eventType, target, i) => {
        if (event[target].length > 1) {
            eventType[target] = new Array(event[target].length).fill(null);
        }
        return eventType;
    }, {});
}


function getDataFromDB (setKey, callback) {
    client.scard(setKey, (error, voteNum) => {
        callback(error, voteNum);
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

        getDataFromDB(setKey, (error, voteNum) => {
            if (error) {

                return callback(error);
            }
            mappedArray.push(voteNum);
            return recurseThroughVotes(array, eventID, eventType, callback, ++index, mappedArray);

        });
    }
}

function getUserVotes (event, eventID, callback) {

    var voteObject = createEventTypeObject(event);
    var eventTypeArray = Object.keys(voteObject);

    eventTypeArray.forEach((eventType, i) => {

        recurseThroughVotes(voteObject[eventType], eventID, eventType, (error, mappedArray) => {

            voteObject[eventType] = mappedArray;
            if ((eventTypeArray.length - 1) === i) {
                callback(null, voteObject);
            }
        });
    });
}

module.exports = getUserVotes;
