import React from 'react';
import formatDate from '../../lib/formatDate.js';

export const EventWhatSection = ({ text, tally, classOptions }) => {
    return (
        <div className="row">
            <div className={ classOptions }>
                { text || "TBC" }
            </div>
             <span className="tally three columns">{ tally }</span>
        </div>
    );
};

export const EventWhereSection = ({ text, tally, classOptions }) => {
    return (
        <div className="row">
            <div className={ classOptions }>
                { text.placeName || "TBC" }
                <br/>
                <span className="placeAddress">
                    { text.placeAddress }
                </span>
            </div>
            <span className="tally three columns">{ tally }</span>
        </div>
    );
};

export const EventWhenSection = ({ text, tally, classOptions }) => {
    return (
        <div className={ classOptions }>
            <span className="row">
                <span className="date">{ formatDate(text.date, true) || "TBC" }</span>
            </span>
            <span className="row">
                <span className="time">{ text.time }</span>
            </span>
            <span className="tally three columns">{ tally }</span>
        </div>
    );
};
