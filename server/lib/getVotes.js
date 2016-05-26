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

function recurseThroughVotes (array, eventID, eventType, recursorCallback, index, mappedArray) {

    if (!index && !mappedArray) {
        index = 0;
        mappedArray = [];
    }
    if (index === array.length) {

        return recursorCallback(null, mappedArray, eventType);
    } else {
        var setKey = "vote:" + eventID + "|" + eventType + ":" + index;

        getDataFromDB(setKey, (error, voteNum) => {
            if (error) {

                return recursorCallback(error);
            }
            mappedArray.push(voteNum);

            return recurseThroughVotes(array, eventID, eventType, recursorCallback, ++index, mappedArray);

        });
    }
}

function iterateEventTypes (eventID, voteObject, list, recursor, callback) {

    var progressCount = 0;

    function report (error, mappedArray, eventType) {

        if (error) {
            return callback(error);
        }
    
        voteObject[eventType] = mappedArray;
        progressCount++;

        if (progressCount === list.length) {

            callback(null, voteObject);
        }
    }

    list.forEach((eventType, i) => {

        var arrayToWorkOn = voteObject[eventType];
        recursor(arrayToWorkOn, eventID, eventType, report);
    });
}

function getUserVotes (event, eventID, callback) {

    var voteObject = createEventTypeObject(event);
    var eventTypeArray = Object.keys(voteObject);

    iterateEventTypes(eventID, voteObject, eventTypeArray, recurseThroughVotes, callback);
}

module.exports = getUserVotes;
