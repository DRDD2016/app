var client = require('./init.js');

function getEventPhotos (eventID, callback) {
    var listName = 'photos:' + eventID;
    client.lrangeAsync(listName, 0, -1)
        .then((response) => {
            return response.map((object, index) => {
                return JSON.parse(object);
            });
        })
        .then((parsedObject) => {
            callback(null, parsedObject);
        })
        .catch((error) => {
            callback(error);
        });
}

module.exports = getEventPhotos;
