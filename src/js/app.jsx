import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import initStore from './init-store.js';

require('../scss/main.scss');

import AppContainer from './components/app-container.jsx';
import Login from './components/login.jsx';
import Feed from './components/feed.jsx';
import CreateEventContainer from './components/create-event-container.jsx';
import EventDetails from './components/event-details.jsx';
import EventWhat from './components/event-what.jsx';
import EventWhen from './components/event-when.jsx';
import EventWhere from './components/event-where.jsx';



const routes = (
    <Route path='/' component={ AppContainer }>

        <IndexRoute component={ Login } />
        <Route path='/feed' component={ Feed } />

        <Route path='/create-event' component={ CreateEventContainer } >
            <IndexRoute component={ EventDetails } />
            <Route path='what' component={ EventWhat } />
            <Route path='where' component={ EventWhere } />
            <Route path='when' component={ EventWhen } />
        </Route>

    </Route>
);


ReactDOM.render(
    <Router history={ hashHistory }>
        { routes }
    </Router>,
    document.getElementsByClassName('content')[0]
);
