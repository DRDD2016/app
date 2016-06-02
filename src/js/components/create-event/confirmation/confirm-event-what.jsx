import React from 'react';

const ConfirmEventWhat = ({ eventWhat }) => {

    const layout = Object.keys(eventWhat).map((data, i) => {

        return (
            <p className="option" key={ i }>
                { eventWhat[data] || "TBC" }
            </p>
        );
    });

    return (
        <div>
            { layout }
        </div>
    );
};

export default ConfirmEventWhat;
