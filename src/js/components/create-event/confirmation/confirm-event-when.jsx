import React from 'react';
import formatDate from '../../../lib/formatDate.js';

const ConfirmEventWhen = ({ eventWhen }) => {

    const layout = eventWhen.map((data, i) => {

        return (
            <p className="option" key={ i }>
                <span className="eventWhen-date">
                    { ` Date: ${formatDate(data.date, true) || "TBC"}` }
                </span>
                <br />
                <span className="eventWhen-time">
                    { ` Time: ${ data.time || "TBC"}` }
                </span>
            </p>
        );
    });

    return (
        <div className="confirm-list">
            { layout }
        </div>
    );
};

export default ConfirmEventWhen;
