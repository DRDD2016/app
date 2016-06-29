import React from 'react';
import { hashHistory } from 'react-router';

const DeletedEvent = () => {
    return (
        <div>
            <div className="event-header row">

                <div>
                    <p className="three columns back-button" > </p>
                    <h3 className=" six columns title">Deleted Event</h3>
                    <p className="three columns cancel-event-button"></p>
                </div>
            </div>
            <div className="container">
                <h2 className="deleted-event">
                This Event has been deleted.
                </h2>

                <div className="row">
                    <button className="twelve columns" onClick={ () => { hashHistory.push("/feed"); } }>
                        Back to Feed
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeletedEvent;
