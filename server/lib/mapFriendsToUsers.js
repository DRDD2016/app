var getUser = require('../db/getUser.js');

function mapFriendsToUsers (array, callback, index, previous) {

    if (!index && !previous) {
        index = 0;
        previous = [];
    }
    if (index >= array.length) {
        return callback(null, previous);
    } else {
        
        getUser(array[index].id, (error, userData) => {

            if (error) {
                return callback(error);
            }

            previous.push(userData);
            return mapFriendsToUsers(array, callback, ++index, previous);
        });
    }
}

module.exports = mapFriendsToUsers;
