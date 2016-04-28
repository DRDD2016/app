import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import initStore from './init-store.js';
import { requireAuthentication } from './requireAuthentication.jsx';

require('../scss/main.scss');

import AppContainer from './containers/app-container.js';
import LoginContainer from './containers/login-container.js';
import FeedContainer from './containers/feed-container.js';
import CreateEventContainer from './components/create-event-container.jsx';
import EventDetailsContainer from './containers/event-details-container.js';
import EventWhatContainer from './containers/event-what-container.js';
import EventWhereContainer from './containers/event-where-container.js';
import EventWhenContainer from './containers/event-when-container.js';
import EventConfirmContainer from './containers/event-confirm-container.js';
import InviteFriendsContainer from './containers/invite-friends-container.js';

import { store } from './init-store.js';

const routes = (
    <Route path='/' component={ AppContainer }>

        <IndexRoute component={ LoginContainer } />
        <Route path='/feed' component={ requireAuthentication(FeedContainer) } />

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
