var FB = require('fb');
var client = require('../db/init.js');
var mapFriendsToUsers = require('./mapFriendsToUsers.js');

function getFBFriends (token, callback) {
    FB.setAccessToken(token);
    FB.api(
        '/me/friends',
        'GET',
        {},
        (response) => {
            if (response && !response.error) {

                mapFriendsToUsers(response.data, (error, result) => {
                    if (error) {
                        callback(error);
                    } else {
                        /* prevents errors if a friend is missing */
                        var filtered = result.filter((user) => {
                            return user !== null;
                        });
                        callback(error, filtered);
                    }
                });

            } else {

                callback(new Error(response.error));
            }
        }
    );
}

module.exports = getFBFriends;
