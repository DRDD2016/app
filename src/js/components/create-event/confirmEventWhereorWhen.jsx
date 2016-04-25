import React from 'react';

const ConfirmEventWhereorWhen = ({ eventWhereorWhen }) => {
    const eventWhereorWhenIndividual = Object.keys(eventWhereorWhen).map((data) => {

        if (eventWhereorWhen[data].placeName) {
            return (
                    <li key={data}>
                        <span className="placeName"> { eventWhereorWhen[data].placeName }</span> { eventWhereorWhen[data].placeAddress}
                    </li>
            );
        } else {
            return (
                    <li key={data}>
                        <span className="date"> { eventWhereorWhen[data].date }</span> { eventWhereorWhen[data].time}
                    </li>
            );
        }
    });

    return (
        <div>
            <ul>
            { eventWhereorWhenIndividual }
            </ul>
        </div>
    );
};

export default ConfirmEventWhereorWhen;
