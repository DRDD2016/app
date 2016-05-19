import React from 'react';
import { Link } from 'react-router';

const Notification = ({ eventID, timestamp, firstName, lastName, photoURL, eventWhat, eventWhere, eventWhen, userIsHost, isPoll, subjectID, hostID }) => {

    let hostIsSubject = subjectID === hostID;
    console.log(hostID, 'hostID', subjectID, 'subject');
    return (
        <Link to={ 'event/' + eventID } >
            <div className="row notifications">
                <img className="three columns ui profile-photo circular image" src={ photoURL } alt="Host photo" />
                <div className="six columns">
                    <p className="timestamp"> { moment(timestamp).startOf().fromNow() } </p>
                    <p className="name">
                        { hostIsSubject && " You"}
                        { !hostIsSubject && firstName + " " + lastName }
                    <span>
                        { hostIsSubject && isPoll && " have created a poll " }
                        { hostIsSubject && !isPoll && " have created an event " }
                        { !hostIsSubject && userIsHost && isPoll && " has voted on your poll" }
                        { !hostIsSubject && userIsHost && !isPoll && " has responded to your event" }
                        { !hostIsSubject && !userIsHost && isPoll && " wants you to vote on their poll" }
                        { !hostIsSubject && !userIsHost && !isPoll && " has invited you to their event" }
                    </span>
                    </p>
                </div>
                <div className="three columns event-type">
                    <label>
                        { eventWhat.length === 1 ? eventWhat[0] : "TBC" }
                    </label>
                    <label>
                        { eventWhere.length === 1 ? eventWhere[0].placeName : "TBC" }
                    </label>
                    <label>
                        { eventWhen.length === 1 ? eventWhen[0].date : "TBC" }
                    </label>
                </div>
            </div>
        </Link>
    );
};

export default Notification;
