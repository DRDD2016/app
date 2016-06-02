import test from 'tape';
import getEventPhotos from '../../../server/db/getEventPhotos.js';
import client from '../../../server/db/init.js';

client.lpush("photos:event:100", "url2", "url1");
test('getEventPhotos returns the correct data', (t) => {

    var eventID = "event:100";
    getEventPhotos(eventID, (error, response) => {

        var expected = ["url1", "url2"];
        t.deepEqual(expected, response, "array returned is as expected for getEventPhotos");
        t.end();
    });
});

test('teardown for getEventPhotos Test', (t) => {

    client.del("photos:event:100");
    t.end();
    
});
