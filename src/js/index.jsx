import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import initStore from './init-store.js';
import { requireAuthentication } from './requireAuthentication.jsx';
import validCookieExists from './lib/validCookieExists.js';
import { getUser } from './actions/user.js';
import { getEvent } from './actions/event.js';
import { getNotifications } from './actions/notifications.js';
import { getCalendar } from './actions/calendar.js';

require('../scss/main.scss');

import AppContainer from './containers/app-container.js';
import LoginContainer from './containers/login-container.js';
import FeedContainer from './containers/feed-container.js';
import EventContainer from './containers/event-container.js';
import EditEventContainer from './containers/edit-event-container.js';
import CalendarContainer from './containers/calendar-container.js';
import CreateEventContainer from './containers/create-event/create-event-container.js';
import EventDetailsContainer from './containers/create-event/event-details-container.js';
import EventWhatContainer from './containers/create-event/event-what-container.js';
import EventWhereContainer from './containers/create-event/event-where-container.js';
import EventWhenContainer from './containers/create-event/event-when-container.js';
import EventConfirmContainer from './containers/create-event/event-confirm-container.js';
import InviteFriendsContainer from './containers/create-event/invite-friends-container.js';

import { store } from './init-store.js';
console.log("hashHistory", hashHistory);
function initialiseAppState (nextState, replace, callback) {

    // catch if user is not authenticated
    // onEnter runs before requireAuthentication
    if (!validCookieExists()) {

        hashHistory.push('/');
    } else {

        if (!store.getState().user.id) {

            store.dispatch(getUser());
        }
        store.dispatch(getNotifications());
    }

    callback();
}

function fetchCalendar (nextState, replace, callback) {

    // catch if user is not authenticated
    // onEnter runs before requireAuthentication
    if (!validCookieExists()) {

        hashHistory.push('/');
    } else {

        if (!store.getState().user.id) {

            store.dispatch(getUser());
        }
        store.dispatch(getCalendar());
    }

    callback();
}

function fetchEvent (nextState, replace, callback) {

    store.dispatch(getEvent(nextState.params.eventID));
    callback();
}

const routes = (
    <Route path='/' component={ AppContainer }>

        <IndexRoute component={ LoginContainer } />
        <Route path='/feed'
               component={ requireAuthentication(FeedContainer) }
               onEnter={ initialiseAppState } />

        <Route path='/event/:eventID'
               component={ requireAuthentication(EventContainer) }
               onEnter={ fetchEvent } />

        <Route path='/edit/:eventID'
               component={ requireAuthentication(EditEventContainer) }
               onEnter={ fetchEvent } />

        <Route path='/calendar'
               component={ requireAuthentication(CalendarContainer) }
               onEnter={ fetchCalendar } />

        <Route path='/create-event' component={ requireAuthentication(CreateEventContainer) } >
            <IndexRoute component={ requireAuthentication(EventDetailsContainer) } />
            <Route path='what' component={ requireAuthentication(EventWhatContainer) } />
            <Route path='where' component={ requireAuthentication(EventWhereContainer) } />
            <Route path='when' component={ requireAuthentication(EventWhenContainer) } />
            <Route path='invitees' component={ requireAuthentication(InviteFriendsContainer) } />
            <Route path='confirm' component={ requireAuthentication(EventConfirmContainer) } />
        </Route>

    </Route>
);


ReactDOM.render(
    <Provider store={ store } >
        <Router history={ hashHistory }>
            { routes }
        </Router>
    </Provider>,
    document.getElementsByClassName('content')[0]
);
