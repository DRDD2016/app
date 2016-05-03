var FB = require('fb');
var client = require('../db/init.js');
var getUser = require('../db/getUser.js');

function getFBFriends (token, callback) {

    FB.setAccessToken(token);
    FB.api(
        '/me/friends',
        'GET',
        {},
        (response) => {
            if (response && !response.error) {
                mapData(response.data, 0, [], (error, result) => {

                    callback(error, result);
                });

            } else {
                callback(response.error);
            }
        }
    );
}

module.exports = getFBFriends;

function mapData (array, index, previous, callback) {

    if (index === array.length) {
        callback(null, previous);
        return;
    } else {

        getUser(array[index].id, (error, userData) => {

            if (error) {
                return callback(error);
            }

            previous.push(userData);
            return mapData(array, ++index, previous, callback);
        });
    }
}
