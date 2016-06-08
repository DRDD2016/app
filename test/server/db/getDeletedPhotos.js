import test from 'tape';
import getDeletedPhotos from '../../../server/db/getDeletedPhotos.js';
import client from '../../../server/db/init.js';

var deletedPhoto = {
    photoURL: "deletedPhotoURL",
    timestamp: 123456678,
    userID: 1234567878
};


client.lpush("photos:event:100|12345678", JSON.stringify(deletedPhoto));

test('getDeletedPhotos returns the correct data', (t) => {
    var userID = 12345678;
    var eventID = "event:100";
    getDeletedPhotos(eventID, userID, (error, response) => {

        var expected = [
            {
                photoURL: 'deletedPhotoURL',
                timestamp: 123456678,
                userID: 1234567878
            }
        ];
        t.ok(typeof response[0] === 'object', "returned data is parsed from getDeletedPhotos");
        t.deepEqual(expected, response, "array returned is as expected for getDeletedPhotos");
        t.end();
    });
});

test('teardown for getEventPhotos Test', (t) => {

    client.del("photos:event:100|12345678");
    t.end();

});
