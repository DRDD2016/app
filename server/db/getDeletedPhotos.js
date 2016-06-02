var client = require('./init.js');

function getDeletedPhotos (eventID, userID, callback) {
    var listName = "photos:" + eventID + "|" + userID;
    console.log(listName);
    client.lrangeAsync(listName, 0, -1)
        .then((response) => {
            callback(null, response);
        })
        .catch((error) => {
            callback(error);
        });
}

module.exports = getDeletedPhotos;
