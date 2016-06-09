import React from 'react';
import Notification from './notification.jsx';
import { Link } from 'react-router';
import getUserID from '../lib/getUserID.js';
import Spinner from './general/spinner.jsx';
import FilterPanel from './general/filter-panel.jsx';


const Feed = ({ notifications, isFetching, handleUpdateNotification, displaySome, displayAll }) => {

    let mappedNotifications = notifications.map((data, i) => {
        return (
            <Notification
                key={ i }
                index={ i }
                viewed={ data.viewed }
                displaySome={ displaySome }
                displayAll={ displayAll }
                eventID={ data.eventID }
                timestamp={ data.timestamp }
                isPoll={ data.isPoll }
                firstName={ data.firstName }
                lastName={ data.lastName }
                photoURL={ data.photoURL }
                eventWhat={ data.eventWhat }
                eventWhere={ data.eventWhere }
                eventWhen={ data.eventWhen }
                userIsHost={ data.hostID == getUserID() }
                hostID={ data.hostID }
                subjectID={ data.subjectID }
                handleUpdateNotification={ handleUpdateNotification }
                inviteesNumber={ data.inviteesNumber }
                eventName={ data.eventName } />
        );
    });

    return (
        <div>
        {
            isFetching && <Spinner />
        }
        {
            !isFetching &&
            <div className="event-header row">
                <h3 className=" twelve columns title">Feed</h3>
            </div>
        }
        {
            notifications.length === 0 && !isFetching &&
            <p>Nothing to see here</p>
        }
            <div className="container">
            {
                !isFetching && <FilterPanel displayAll={ displayAll } displaySome={ displaySome } />
            }
            {
                !isFetching && mappedNotifications
            }
            </div>

        </div>
    );
};

export default Feed;
