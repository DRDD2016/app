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

                    callback(error, result);
                });

            } else {
                console.log(response.error);
                callback(new Error(response.error));
            }
        }
    );
}

module.exports = getFBFriends;
