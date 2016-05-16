/***
USERS
***/
export const HARRY_ID = "12345678";
export const SOHIL_ID = "10154129575200996";
export const eventConfirmedHarryEventID = "event:100";
export const eventPollSohilEventID = "event:300";


export const Sohil = {
    id: SOHIL_ID,
    firstName: "Sohil",
    lastName: "Pandya",
    photoURL: "https://scontent.xx.fbcdn.net/v/t1.0-1/p320x320/12821522_10154022257850996_5243104697257562021_n.jpg?oh=3b82501dc03ce1aa1d0db64278f606fa&oe=57AC45AB"
};

export const Harry = {
    id: HARRY_ID,
    firstName: "Harry",
    lastName: "Potter",
    photoURL: "http://harrypotter.com/photo.jpg"
};

/*
EVENT:100 - confirmed
*/
export const eventConfirmedHarry = {
    eventName: "Harry's birthday",
    eventDescription: "It's my birthday",
    eventWhat: ["Eat"],
    eventWhere: [{
        placeName: "Harrods",
        placeAddress: "Knightsbridge, London, United Kingdom"
    }],
    eventWhen: [{
        date: "2016-07-31",
        time: "11:00"
    }],
    invitees: [
        Sohil
    ],
    isPoll: false,
    hostID: Harry.id
};

export const eventConfirmedHarryNotification = {
    eventID: eventConfirmedHarryEventID,
    timestamp: Date.now(),
    firstName: Harry.firstName,
    lastName: Harry.lastName,
    photoURL: Harry.photoURL,
    eventWhat: eventConfirmedHarry.eventWhat,
    eventWhere: eventConfirmedHarry.eventWhere,
    eventWhen: eventConfirmedHarry.eventWhen,
    isPoll: false,
    hostID: Harry.id
};

/*
EVENT:101 - poll
*/
export const eventPollSohil = {
    eventName: "Sohil's thing",
    eventDescription: "Let's go somewhere",
    eventWhat: ["Bowling", "Swimming", "Eating"],
    eventWhere: [{
        placeName: "All Star Lanes",
        placeAddress: "95 Brick Ln, London E1 6QL, United Kingdom"
    }],
    eventWhen: [{
        date: "2016-12-12",
        time: "12:00"
    }],
    invitees: [
        Harry
    ],
    isPoll: true,
    hostID: Sohil.id
};

/**
 ** event:101 notification
**/

export const eventPollSohilNotification = {
    eventID: eventPollSohilEventID,
    timestamp: Date.now(),
    firstName: Sohil.firstName,
    lastName: Sohil.lastName,
    photoURL: Sohil.photoURL,
    eventWhat: eventPollSohil.eventWhat,
    eventWhere: eventPollSohil.eventWhere,
    eventWhen: eventPollSohil.eventWhen,
    isPoll: true,
    hostID: Sohil.id
};



export const eventPollSohilVoted = {
    eventWhat: [true, false, true]
};

export const genericError = {
    message: "Whoops"
};
