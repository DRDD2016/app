import React from 'react';
import { Link } from 'react-router';

const Notification = ({ eventID, timestamp, firstName, lastName, photoURL, eventWhat, eventWhere, eventWhen, userIsHost, isPoll }) => {

    return (
        <Link to={ 'event/' + eventID } >
            <div className="row">
                <img className="two columns profile-photo" src={ photoURL } alt="Host photo" />
                <div className="seven columns">
                    <p>
                        { firstName + " " + lastName }
                        { userIsHost && isPoll && " has voted on your poll" }
                        { userIsHost && !isPoll && " has responded to your event" }
                        { !userIsHost && isPoll && " wants you to vote on their poll" }
                        { !userIsHost && !isPoll && " has invited you to their event" }
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
