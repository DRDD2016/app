import React from 'react';
import Navbar from './general/navbar.jsx';

const App = ({ location, children, error }) => {

    return (
        <div className="">
            {
                error &&
                <h3>Error {error.status} {error.data.error}: {error.data.message}</h3>
            }
            { children }
            <Navbar currentLocation={ location.pathname } />
        </div>
    );
};

export default App;
