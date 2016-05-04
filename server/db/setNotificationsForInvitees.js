var client = require('./init.js');

function setNotificationsForInvitees(invitees, notification, callback) {
    invitees.forEach((elem,index) => {

        var setName = "notifications:" + elem.id;
        client.saddAsync(setName, JSON.stringify(notification))

        .then((response) => {
            if(index === invitees.length-1) {
                return callback(null, response);
            }
        })
        .catch((error) => {
            return callback(error);
        });
    });
}

module.exports = setNotificationsForInvitees;
