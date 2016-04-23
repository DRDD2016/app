import React from 'react';

const App = ({ children, error }) => {

    return (
        <div>
            {
                error &&
                <h3>Error {error.status} {error.data.error}: {error.data.message}</h3>
            }
            { children }
        </div>
    );
};

export default App;
