import React from 'react';
import Navbar from './general/navbar.jsx';

const App = ({ location, children, error }) => {

    let currentLocation;
    if (!process.env.DEVELOPMENT) {
        currentLocation = location.pathname;
    }

    return (
        <div>
            {
                error &&
                <h3>Error { error.status } { error.data.error }: { error.data.message }</h3>
            }
            { children }
            <Navbar currentLocation={ currentLocation } />
        </div>
    );
};

export default App;
