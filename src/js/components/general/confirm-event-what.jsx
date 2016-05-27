import React from 'react';

const ConfirmEventWhat = ({ eventWhat }) => {

    const eventWhatIndividual = Object.keys(eventWhat).map((data) => {
        return (
            <li key={data}>
                { eventWhat[data] }
            </li>
        );
    });

    return (
        <div>
            <ul>
            { eventWhatIndividual }
            </ul>
        </div>
    );
};

export default ConfirmEventWhat;
