import React from 'react';
import formatDate from '../../lib/formatDate.js';

export const EventWhatSection = ({ text, tally, classOptions }) => {
    return (
        <div className="row">
            <label className={ classOptions }>
                { text || "TBC" }
            </label>
             <span className="tally three columns">{ tally }</span>
        </div>
    );
};

export const EventWhereSection = ({ text, tally, classOptions }) => {
    return (
        <div className="row">
            <label className={ classOptions }>
                { text.placeName || "TBC" } <span className="placeAddress"><br/>{ text.placeAddress }</span>
            </label>
            <span className="tally three columns">{ tally }</span>
        </div>
    );
};

export const EventWhenSection = ({ text, tally, classOptions }) => {
    return (
        <div className="row">
            <label className={ classOptions }>
                { formatDate(text.date) || "TBC" } { text.time }
            </label>
            <span className="tally three columns">{ tally }</span>
        </div>
    );
};
