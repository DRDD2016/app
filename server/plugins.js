var Inert = require('inert');
var Home  = require('./routes/home.js');
var GetUser = require('./routes/get-user.js');
var GetNotifications = require('./routes/get-notifications.js');
var GetCalendar = require('./routes/get-calendar.js');
var NewEvent = require('./routes/new-event.js');
var NewEventFriends = require('./routes/new-event-friends.js');
var GetEvent = require('./routes/get-event.js');
var ConfirmPoll = require('./routes/confirm-poll.js');
var ConfirmEvent = require('./routes/confirm-event.js');
var UpdateRSVP = require('./routes/update-rsvp.js');
var DeleteEvent = require('./routes/delete-event.js');
var EditEvent = require('./routes/edit-event.js');

var plugins = [
    Inert,
    Home,
    GetUser,
    GetNotifications,
    GetCalendar,
    NewEvent,
    NewEventFriends,
    GetEvent,
    ConfirmPoll,
    ConfirmEvent,
    UpdateRSVP,
    DeleteEvent,
    EditEvent
];

module.exports = plugins;
