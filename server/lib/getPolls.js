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
    client.sismember(setKey, userID, (err, integer) => {

        if (integer === 1) {
            callback(err, true);
        } else {
            callback(err, false);
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

        getDataFromDB(setKey, userID, (err, hasVoted) => {
            if (err) {
                console.log(err,'erroro');
                return callback(err);
            }
            mappedArray.push(hasVoted);
            return recurseThroughPolls(array, eventID, userID, eventType, callback, ++index, mappedArray);

        });
    }


}

function getUserPoll (event, eventID, userID, callback) {

    var setPoll = createEventTypeObject(event);
    var eventTypeArray = Object.keys(setPoll);

    eventTypeArray.forEach((eventType, i) => {

        recurseThroughPolls(setPoll[eventType], eventID, userID, eventType, (err, mappedArray) => {
            setPoll[eventType] = mappedArray;
            if ((eventTypeArray.length - 1) === i) {
                callback(setPoll);
            }
        });
    });

}



module.exports = getUserPoll;
