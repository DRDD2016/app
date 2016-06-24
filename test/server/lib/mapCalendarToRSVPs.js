import test from 'tape';
import mapCalendarToRSVPs from '../../../server/lib/mapCalendarToRSVPs.js';
import { SOHIL_ID as userID } from '../../utils/fixtures';
import { eventConfirmedHarryCalendar as calendar } from '../../utils/fixtures';


test('mapCalendarToRSVPs returns the correct attendance status', (t) => {

    mapCalendarToRSVPs([calendar], userID, (error, result) => {

        t.ok(result[0].hasOwnProperty('RSVP'), 'An RSVP key exists in calendar item');
        t.equal(result[0].RSVP, 'going', 'Corrent attendance status returned');
        t.end();
    });
});
