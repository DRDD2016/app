import React from 'react';

export const EventWhatSection = ({ text, tally, classOptions }) => {
    return (
        <div className="row">
            <label className={ classOptions }>
                { text }
            </label>
             <span className="tally three columns">{ tally }</span>
        </div>
    );
};

export const EventWhereSection = ({ text, tally, classOptions }) => {
    return (
        <div className="row">
            <label className={ classOptions }>
                { text.placeName } <span className="placeAddress"><br/>{ text.placeAddress }</span>
            </label>
            <span className="tally three columns">{ tally }</span>
        </div>
    );
};

export const EventWhenSection = ({ text, tally, classOptions }) => {
    return (
        <div className="row">
            <label className={ classOptions }>
                { text.date } { text.time }
            </label>
            <span className="tally three columns">{ tally }</span>
        </div>
    );
};
