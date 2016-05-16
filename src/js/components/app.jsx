import React from 'react';
import Navbar from './general/navbar.jsx';

const App = ({ children, error }) => {

    return (
        <div className="container">
            {
                error &&
                <h3>Error {error.status} {error.data.error}: {error.data.message}</h3>
            }
            { children }
            <Navbar />
        </div>
    );
};

export default App;
