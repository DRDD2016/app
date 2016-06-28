import React from 'react';
import classnames from 'classnames';

const ConfirmEventWhat = ({ eventWhat }) => {

    const layout = Object.keys(eventWhat).map((data, i) => {

        let classes = classnames('three columns confirm-new-event-title what', {
            'hide': i > 0
        });

        return (
            <div className="poll-option-container row">
                <div className={ classes }>What</div>
                <div className="nine columns confirm-new-event what" key={ i }>
                    { eventWhat[data] || "TBC" }
                </div>
            </div>
        );
    });

    return (
        <div>
            { layout }
        </div>
    );
};

export default ConfirmEventWhat;
