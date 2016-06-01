import React from 'react';

const ConfirmEventWhere = ({ eventWhere }) => {

    const layout = eventWhere.map((data, i) => {

        return (
            <p className="option" key={ i }>
                <span className="eventWhere-placeName">
                    { data.placeName }
                </span>
                <br />
                <span className="eventWhere-placeAddress">

                    { data.placeAddress }
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

export default ConfirmEventWhere;
