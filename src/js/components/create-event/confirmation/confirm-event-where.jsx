import React from 'react';
import classnames from 'classnames';

const ConfirmEventWhere = ({ eventWhere }) => {

    const layout = eventWhere.map((data, i) => {

        let classes = classnames('three columns confirm-new-event-title where', {
            'hide': i > 0
        });

        return (
            <div className="poll-option-container row" key={ i }>
                <div className={ classes }>Where</div>
                <div className="nine columns confirm-new-event where">
                    <span className="placeName">{ data.placeName || "TBC" }</span>
                    <span className="eventWhere-placeAddress">
                        { data.placeAddress }
                    </span>
                </div>
            </div>
        );
    });

    return (
        <div className="confirm-list">
            { layout }
        </div>
    );
};

export default ConfirmEventWhere;
