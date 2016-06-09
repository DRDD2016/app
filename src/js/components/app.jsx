import React from 'react';
import Navbar from './general/navbar.jsx';

const App = ({ location, children, error }) => {

    let currentLocation;
    if (!process.env.DEVELOPMENT) {
        currentLocation = location.pathname;
    }

    let online = window.navigator.onLine;
    return (
        <div>
            {
                !online &&
                <div>
                    <p> You are Offline, please connect to the interet to access Spark </p>
                </div>

            }
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
