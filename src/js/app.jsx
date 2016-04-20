import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import initStore from './init-store.js';

require('../scss/main.scss');

import AppContainer from './components/app-container.jsx';
import Login from './components/login.jsx';
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

        <IndexRoute component={ Login } />
        <Route path='/feed' component={ Feed } />

        <Route path='/create-event' component={ CreateEventContainer } >
            <IndexRoute component={ EventDetailsContainer } />
            <Route path='what' component={ EventWhatContainer } />
            <Route path='where' component={ EventWhereContainer } />
            <Route path='when' component={ EventWhenContainer } />
            <Route path='confirm' component={ EventConfirmContainer } />
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
