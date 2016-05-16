var client = require('../db/init.js');

function createEventTypeObject (event) {

    var targets = ['eventWhat', 'eventWhere', 'eventWhen'];
    return targets.reduce((eventType, target, i) => {

        if (event[target].length > 1) {
            eventType[target] = new Array(event[target].length).fill(false);
        }
        return eventType;
    }, {});
}

function getDataFromDB (setKey, userID, callback) {

    client.sismember(setKey, userID, (error, integer) => {

        if (integer === 1) {
            callback(error, true);
        } else {
            callback(error, false);
        }
    });
}

function recurseThroughPolls (array, eventID, userID, eventType, callback, index, mappedArray) {

    if (!index && !mappedArray) {
        index = 0;
        mappedArray = [];
    }
    if (index === array.length) {

        return callback(null, mappedArray);
    } else {
        var setKey = "vote:" + eventID + "|" + eventType + ":" + index;

        getDataFromDB(setKey, userID, (error, hasVoted) => {

            if (error) {
                return callback(error);
            }
            mappedArray.push(hasVoted);
            return recurseThroughPolls(array, eventID, userID, eventType, callback, ++index, mappedArray);

        });
    }
}

function getPoll (event, eventID, userID, callback) {

    var pollObject = createEventTypeObject(event);
    var eventTypeArray = Object.keys(pollObject);

    eventTypeArray.forEach((eventType, i) => {

        recurseThroughPolls(pollObject[eventType], eventID, userID, eventType, (error, mappedArray) => {

            pollObject[eventType] = mappedArray;
            if ((eventTypeArray.length - 1) === i) {

                callback(error, pollObject);
            }
        });
    });
}

module.exports = getPoll;
