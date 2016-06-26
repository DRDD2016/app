import React from 'react';
import formatDate from '../../lib/formatDate.js';

export const EventWhatSection = ({ text, tally, choiceClasses, labelClasses }) => {
    return (
        <div className="poll-option-container row">
            <div className={ labelClasses }>What</div>
            <div className={ choiceClasses }>
                <i className="fa fa-star" ariaHidden="true" />
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
                <i className="fa fa-map-marker" ariaHidden="true" />
                { text.placeName || "TBC" }
                <br/>
                <span className="placeAddress">
                    <i className="fa fa-map-marker hide" ariaHidden="true" />
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
                    <span className="date">{ formatDate(text.date, 'half') || "TBC" }</span>
                    <span className="time">{ text.time }</span>
                </span>
            </div>
            <span className="tally two columns">{ tally }</span>
        </div>
    );
};
