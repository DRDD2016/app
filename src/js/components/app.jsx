import React from 'react';

const App = ({ children, error }) => {

    return (
        <div className="container">
            {
                error &&
                <h3>Error {error.status} {error.data.error}: {error.data.message}</h3>
            }
            { children }
            <div className="navbar hide">
                This will be the menu
            </div>
        </div>
    );
};

export default App;
