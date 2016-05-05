import React from 'react';
import { Link } from 'react-router';

const Notification = ({ eventID, timestamp, isPoll, hostName, hostPhotoURL, eventWhat, eventWhere, eventWhen }) => {
    return (
        <Link to={ 'event/' + eventID } >
            <div className="row">
                <img className="two columns profile-photo" src={ hostPhotoURL } alt="Host photo" />
                <div className="seven columns">
                    <p>
                        { hostName } has invited you to { isPoll ? " vote on a poll" : "an event" }
                    </p>
                </div>
                <div className="three columns">
                    <ul>
                        { eventWhat.length === 1 ? eventWhat[0] : "TBC" }
                    </ul>
                    <ul>
                        { eventWhere.length === 1 ? `{ $eventWhere[0].placeName }` : "TBC" }
                    </ul>
                    <ul>
                        { eventWhen.length === 1 ? eventWhen[0].date : "TBC" }
                    </ul>
                </div>
                <hr />
            </div>
        </Link>
    );
};

export default Notification;
