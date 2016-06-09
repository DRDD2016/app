var client = require('./init.js');

function getLatestEventPhoto (eventID, callback) {

    if (typeof eventID !== 'string') {
        throw new Error("getLatestEventPhoto: eventID must be a string");
    }

    var listName = 'photos:' + eventID;

    client.lrangeAsync(listName, 0, 1)
        .then((response) => {

            return response.map((object, index) => {

                return JSON.parse(object);
            });
        })
        .then((parsedObject) => {
            
            callback(null, parsedObject[0]);
        })
        .catch((error) => {
            callback(error);
        });
}

module.exports = getLatestEventPhoto;
