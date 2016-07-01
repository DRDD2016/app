import React from 'react';
import formatDate from '../../lib/formatDate.js';
import classnames from 'classnames';

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

    let placeNameClasses = classnames({
        'long': text.placeName.length > 18
    });

    return (
        <div className="poll-option-container row">
            <div className={ labelClasses }>Where</div>
            <div className={ choiceClasses }>
                <i className="fa fa-map-marker" ariaHidden="true" />
                <span className={ placeNameClasses }>
                    { text.placeName || "TBC" }
                </span>
                <br/>
                {
                    text.placeAddress !== '' &&
                    <span className="placeAddress">
                        { text.placeAddress }
                    </span>
                }
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
                    <span className="time">{ text.time || 'TBC' }</span>
                </span>
            </div>
            <span className="tally two columns">{ tally }</span>
        </div>
    );
};
