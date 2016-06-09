var getLatestEventPhoto = require('../db/getLatestEventPhoto.js');

function mapCalendarToPhoto (eventIDArray, callback, index) {

    if (!index) {
        index = 0;
    }
    if (index === eventIDArray.length) {

        return callback(null, eventIDArray);
    }

    // do something
    getLatestEventPhoto(eventIDArray[index].eventID, (error, photo) => {

        if (error) {
            return callback(error);
        } else {

            eventIDArray[index].coverPhoto = photo;
            mapCalendarToPhoto(eventIDArray, callback, ++index);
        }
    });
}

module.exports = mapCalendarToPhoto;
