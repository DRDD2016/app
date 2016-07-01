var client = require('./init.js');

function deletePhoto (photo, eventID, userID, callback) {

    var listName = "photos:" + eventID + "|" + userID;

    client.lpushAsync(listName, photo)
    .then((response) => {
        callback(null, response);
    })
    .catch((error) => {
        callback(error);
    });

}

module.exports = deletePhoto;
