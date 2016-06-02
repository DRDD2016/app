var client = require('./init.js');

function getEventPhotos (eventID, callback) {
    var listName = 'photos:' + eventID;
    client.lrangeAsync(listName, 0, -1)
        .then((response) => {
            
            callback(null, response);
        })
        .catch((error) => {
            callback(error);
        });
        //WIP
}

module.exports = getEventPhotos;
