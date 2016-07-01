var getLatestEventPhoto = require('../db/getLatestEventPhoto.js');
var getEventPhotos = require('../db/getEventPhotos.js');
var getDeletedPhotos = require('../db/getDeletedPhotos.js');
var getPersonalPhotos = require('./getPersonalPhotos.js');

function mapCalendarToPhoto (eventIDArray, userID, callback, index) {

    if (!index) {
        index = 0;
    }
    if (index === eventIDArray.length) {

        return callback(null, eventIDArray);
    }

    // do something
    getEventPhotos(eventIDArray[index].eventID, (error, allPhotos) => {

        if (error) {
            return callback(error);
        } else {

            getDeletedPhotos(eventIDArray[index].eventID, userID, (error, deletedPhotos) => {

                getPersonalPhotos(allPhotos, deletedPhotos, [], (error, personalPhotos) => {
                    
                    eventIDArray[index].coverPhoto = personalPhotos[0];
                    mapCalendarToPhoto(eventIDArray, userID, callback, ++index);
                });
            });
        }
    });
}

module.exports = mapCalendarToPhoto;
