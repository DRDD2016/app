import React from 'react';

const ConfirmEventWhat = ({ eventWhat }) => {

    const eventWhatIndividual = Object.keys(eventWhat).map((data) => {
        return (
            <p key={ data }>
                { eventWhat[data] }
            </p>
        );
    });

    return (
        <div>
            { eventWhatIndividual }
        </div>
    );
};

export default ConfirmEventWhat;
