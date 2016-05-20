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

        return callback(null, mappedArray, eventType);
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

function iterateEventTypes (eventID, userID, pollObject, list, recursor, callback) {

    var progressCount = 0;

    function report (error, mappedArray, eventType) {

        if (error) {
            return callback(error);
        }
        pollObject[eventType] = mappedArray;
        progressCount++;

        if (progressCount === list.length) {

            callback(null, pollObject);
        }
    }

    list.forEach((eventType, i) => {

        var arrayToWorkOn = pollObject[eventType];

        recursor(arrayToWorkOn, eventID, userID, eventType, report);
    });
}

function getPoll (event, eventID, userID, callback) {

    var pollObject = createEventTypeObject(event);
    var eventTypeArray = Object.keys(pollObject);

    iterateEventTypes(eventID, userID, pollObject, eventTypeArray, recurseThroughPolls, callback);
}

module.exports = getPoll;
