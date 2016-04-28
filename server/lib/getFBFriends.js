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
                mapData(response.data, 0, [], function (result) {

                    callback(null, result);
                });

            } else {
                callback(response.error);
            }
        }
    );
}

module.exports = getFBFriends;

function mapData (array, index, acc, cb) {



    if (index === array.length) {
        cb(acc);
        return;
    } else {

        getUser(array[index].id, (error, userData) => {
            acc.push(userData);
            return mapData(array, ++index, acc, cb);
        });
    }
}

function getInviteeDetails (id) {



}
