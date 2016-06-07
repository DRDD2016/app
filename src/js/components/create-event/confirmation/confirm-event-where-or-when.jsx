import React from 'react';

const ConfirmEventWhereorWhen = ({ eventWhereorWhen }) => {

    const eventWhereorWhenIndividual = Object.keys(eventWhereorWhen).map((data) => {

        if (eventWhereorWhen[data].placeName) {
            return (
                <p key={data}>
                    <span className="placeName"> { eventWhereorWhen[data].placeName }</span> { eventWhereorWhen[data].placeAddress}
                </p>
            );
        } else {
            return (
                <p key={data}>
                    <span className="date"> { eventWhereorWhen[data].date }</span> { eventWhereorWhen[data].time}
                </p>
            );
        }
    });

    return (
        <div>
            { eventWhereorWhenIndividual }
        </div>
    );
};

export default ConfirmEventWhereorWhen;
