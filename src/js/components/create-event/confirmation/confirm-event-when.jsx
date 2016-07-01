import React from 'react';
import classnames from 'classnames';
import formatDate from '../../../lib/formatDate.js';

const ConfirmEventWhen = ({ eventWhen }) => {

    const layout = eventWhen.map((data, i) => {

        let classes = classnames('three columns confirm-new-event-title when', {
            'hide': i > 0
        });

        return (
            <div className="poll-option-container row" key={ i }>
                <div className={ classes }>When</div>
                <div className="nine columns confirm-new-event when">
                    <span className="row">
                        <span className="date">
                            { formatDate(data.date, true) || "TBC" }
                        </span>
                        <span className="time">
                            { data.time || "TBC" }
                        </span>
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

export default ConfirmEventWhen;
