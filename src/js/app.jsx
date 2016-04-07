import React from 'react';
import ReactDOM from 'react-dom';

require('../scss/main.scss');
import AppContainer from './components/app-container.jsx';

ReactDOM.render(
    <AppContainer />,
    document.getElementsByClassName('content')[0]
);
