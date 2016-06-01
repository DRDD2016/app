var client = require('./init.js');

function markNotificationAsViewed (index, userID, callback) {
    var listName = 'notifications:' + userID;
    client.lindex(listName, index, (error, response) => {

        if (error) {
            callback(error);
        }
        var notification = JSON.parse(response);
        notification.viewed = true;

        client.lset(listName, index, JSON.stringify(notification), (error, response2) => {
            if (error) {
                callback(error);
            } else {
                callback(null, response2);
            }
        });

    });

}

module.exports = markNotificationAsViewed;
