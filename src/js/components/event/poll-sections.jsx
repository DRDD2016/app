import React from 'react';
import formatDate from '../../lib/formatDate.js';

export const EventWhatSection = ({ text, tally, choiceClasses, labelClasses }) => {
    return (
        <div className="poll-option-container row">
            <div className={ labelClasses }>What</div>
            <div className={ choiceClasses }>
                { text || "TBC" }
            </div>
             <span className="tally two columns">{ tally }</span>
        </div>
    );
};

export const EventWhereSection = ({ text, tally, choiceClasses, labelClasses }) => {
    return (
        <div className="poll-option-container row">
            <div className={ labelClasses }>Where</div>
            <div className={ choiceClasses }>
                { text.placeName || "TBC" }
                <br/>
                <span className="placeAddress">
                    { text.placeAddress }
                </span>
            </div>
            <span className="tally two columns">{ tally }</span>
        </div>
    );
};

export const EventWhenSection = ({ text, tally, choiceClasses, labelClasses }) => {
    return (
        <div className="poll-option-container row">
            <div className={ labelClasses }>When</div>
            <div className={ choiceClasses }>
                <span className="row">
                    <span className="date">{ formatDate(text.date, true) || "TBC" }</span>
                </span>
                <span className="row">
                    <span className="time">{ text.time }</span>
                </span>
                <span className="tally two columns">{ tally }</span>
            </div>
        </div>
    );
};
