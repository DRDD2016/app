import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import initStore from './init-store.js';
import { requireAuthentication } from './requireAuthentication.jsx';

require('../scss/main.scss');

import AppContainer from './components/app-container.jsx';
import LoginContainer from './containers/login-container.js';
import Feed from './components/feed.jsx';
import CreateEventContainer from './components/create-event-container.jsx';
import EventDetailsContainer from './containers/event-details-container.js';
import EventWhatContainer from './containers/event-what-container.js';
import EventWhereContainer from './containers/event-where-container.js';
import EventWhenContainer from './containers/event-when-container.js';
import EventConfirmContainer from './containers/event-confirm-container.js';


const store = initStore();

const routes = (
    <Route path='/' component={ AppContainer }>

        <IndexRoute component={ LoginContainer } />
        <Route path='/feed' component={ requireAuthentication(Feed) } />

        <Route path='/create-event' component={ requireAuthentication(CreateEventContainer) } >
            <IndexRoute component={ requireAuthentication(EventDetailsContainer) } />
            <Route path='what' component={ requireAuthentication(EventWhatContainer) } />
            <Route path='where' component={ requireAuthentication(EventWhereContainer) } />
            <Route path='when' component={ requireAuthentication(EventWhenContainer) } />
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
