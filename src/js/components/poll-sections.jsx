import React from 'react';

export const EventWhatSection = ({ text}) => {

    return (
        <label>
            { text }
        </label>
    );
};

export const EventWhereSection = ({ text }) => {
    return (
        <label>{text.placeName} {text.placeAddress}</label>
    );
};

export const EventWhenSection = ({ text }) => {
    return (
        <label>{text.date} {text.time}</label>
    );
};
