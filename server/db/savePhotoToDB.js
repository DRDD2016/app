var client = require('./init.js');

function savePhotoToDB (eventID, photoURL, userID, callback) {
    var photoObject = {};
    photoObject.photoURL = photoURL;
    photoObject.userID = userID;
    photoObject.timestamp = Date.now();

    var listName = 'photos:' + eventID;

    client.lpushAsync(listName, photoObject)
        .then((response) => {
            callback(null, response);
        })
        .catch((error) => {
            callback(error);
        });
        
}

module.exports = savePhotoToDB;
