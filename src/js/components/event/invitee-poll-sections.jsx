import React from 'react';

export const EventWhatSection = ({ text, tally }) => {
    return (
        <label>
            { text } { tally }
        </label>
    );
};

export const EventWhereSection = ({ text, tally }) => {
    return (
        <label>{ text.placeName } { text.placeAddress } { tally }</label>
    );
};

export const EventWhenSection = ({ text, tally }) => {
    return (
        <label>{ text.date } { text.time } { tally }</label>
    );
};
