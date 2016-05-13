var client = require('../../server/db/init.js');
var stringifyObjectValues = require('../../server/lib/stringifyObjectValues.js');
var fixtures = require('./fixtures');

/*
- create Sohil
- create Harry
- create event:100 (confirmed)
- create event:100 notifications
- create event:300 (poll)
- create event:300 notifications
*/

client.hmsetAsync("user:10154129575200996",
                 'firstName', fixtures.Sohil.firstName,
                 'lastName', fixtures.Sohil.lastName,
                 'id', fixtures.Sohil.id,
                 'token', process.env.SOHIL_TOKEN,
                 'photoURL', fixtures.Sohil.photoURL);

client.hmsetAsync("user:12345678",
          'firstName', fixtures.Harry.firstName,
          'lastName', fixtures.Harry.lastName,
          'id', fixtures.Harry.id,
          'token', "notokenhere",
          'photoURL', fixtures.Harry.photoURL);

/*
SET DEFAULT CONFIRMED EVENT 100
*/

var eventConfirmedDefault = stringifyObjectValues(fixtures.eventConfirmedHarry);

client.hmsetAsync("event:100", "eventName", eventConfirmedDefault.eventName,
                 "eventDescription", eventConfirmedDefault.eventDescription,
                 "eventWhat", eventConfirmedDefault.eventWhat, "eventWhere", eventConfirmedDefault.eventWhere, "eventWhen", eventConfirmedDefault.eventWhen,
                 "invitees", eventConfirmedDefault.invitees, "hostID", eventConfirmedDefault.hostID, "isPoll", eventConfirmedDefault.isPoll);

client.saddAsync("notifications:12345678", JSON.stringify(fixtures.eventConfirmedHarryNotification));
/*
SET DEFAULT POLL EVENT 300
*/

var eventPollDefault = stringifyObjectValues(fixtures.eventPollSohil);

client.hmsetAsync("event:300", "eventName", eventPollDefault.eventName,
                 "eventDescription", eventPollDefault.eventDescription,
                 "eventWhat", eventPollDefault.eventWhat, "eventWhere", eventPollDefault.eventWhere, "eventWhen", eventPollDefault.eventWhen,
                 "invitees", eventPollDefault.invitees, "hostID", eventPollDefault.hostID, "isPoll", eventPollDefault.isPoll);


client.saddAsync("notifications:12345678", JSON.stringify(fixtures.eventPollSohilNotification));
