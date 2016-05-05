var client = require('../../server/db/init.js');

client.hmsetAsync("user:10154129575200996",
                 'firstName', "Sohil",
                 'lastName', "Pandya",
                 'id', 10154129575200996,
                 'token', "notokenhere",
                 'photoURL', "https://scontent.xx.fbcdn.net/v/t1.0-1/p320x320/12821522_10154022257850996_5243104697257562021_n.jpg?oh=3b82501dc03ce1aa1d0db64278f606fa&oe=57AC45AB");

client.hmsetAsync("user:12345678",
          'firstName', "Harry",
          'lastName', "Potter",
          'id', 12345678,
          'token', "harryToken",
          'photoURL', "http://harrypotter.com/photo.jpg");

const notification = {
    isPoll: true,
    timestamp: Date.now(),
    eventID: "event:100",
    hostName: "Sohil Pandya",
    hostPhotoURL: "https://scontent.xx.fbcdn.net/v/t1.0-1/p320x320/12821522_10154022257850996_5243104697257562021_n.jpg?oh=3b82501dc03ce1aa1d0db64278f606fa&oe=57AC45AB"
};

client.saddAsync("notifications:12345678", JSON.stringify(notification));

/*
* Creates test event:101
*
*/
const eventName = "Birthday";
const eventDescription = "Let's do something!";
const eventWhat = [
    "Bowling",
    "Swimming"
];
const eventWhere = [
    {
        placeName: "Harrods",
        placeAddress: "Knightsbridge, London"
    }
];
const eventWhen = [
    {
        date: "2016-11-10",
        time: "12:00"
    }
];
const invitees = [
    {
        id: 12345678,
        firstName: "Harry",
        lastName: "Potter",
        photoURL: "http://harrypotter.com/image.jpg"
    }
];

const event = {
    eventWhat: JSON.stringify(eventWhat),
    eventWhere: JSON.stringify(eventWhere),
    eventWhen: JSON.stringify(eventWhen),
    invitees: JSON.stringify(invitees),
    hostID: 10154129575200996,
    isPoll: true
};

client.hmsetAsync("event:101", event);
