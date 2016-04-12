import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

require('../scss/main.scss');

import AppContainer from './components/app-container.jsx';
import Login from './components/login.jsx';
import Feed from './components/feed.jsx';


const routes = (
    <Route path='/' component={ AppContainer }>
        <IndexRoute component={Login} />
        <Route path='/feed' component={Feed} />
    </Route>
)


ReactDOM.render(
    <Router history={ hashHistory }>
        { routes }
    </Router>,
    document.getElementsByClassName('content')[0]
);
