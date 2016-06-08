import test from 'tape';
import getEventPhotos from '../../../server/db/getEventPhotos.js';
import client from '../../../server/db/init.js';

var photo1 = {
    photoURL: "url1",
    timestamp: 123456678,
    userID: 1234567878
};
var photo2 = {
    photoURL: "url2",
    timestamp: 123456678,
    userID: 1234567878
};
client.lpush("photos:event:100", JSON.stringify(photo2));
client.lpush("photos:event:100", JSON.stringify(photo1));

test('getEventPhotos returns the correct data', (t) => {

    var eventID = "event:100";
    getEventPhotos(eventID, (error, response) => {
        var expected = [
            {
                photoURL: 'url1',
                timestamp: 123456678,
                userID: 1234567878
            },
            {
                photoURL: 'url2',
                timestamp: 123456678,
                userID: 1234567878
            }
        ];
        t.ok(typeof response[0] === 'object', "returned data is parsed from getEventPhotos");
        t.deepEqual(response, expected, "array returned is as expected for getEventPhotos");
        t.end();
    });
});

test('teardown for getEventPhotos Test', (t) => {

    client.del("photos:event:100");
    t.end();

});
