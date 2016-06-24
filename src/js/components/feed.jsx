import React from 'react';
import Notification from './notification.jsx';
import { Link } from 'react-router';
import getUserID from '../lib/getUserID.js';
import Spinner from './general/spinner.jsx';
import FilterPanel from './general/filter-panel.jsx';



const Feed = ({ notifications, isFetching, handleUpdateNotification, displaySome, displayAll, calendarIsFiltered, isShowHosting }) => {

    let mappedNotifications = notifications.map((data, i) => {
        return (
            <Notification
                key={ i }
                index={ i }
                viewed={ data.viewed }
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
                <div className="no-events-message">
                    You have no events. <br />
                    (Why not create some?)
                </div>
        }
            <div className="container">
            {
                !isFetching && notifications.length > 0 &&
                    <FilterPanel displayAll={ displayAll }
                                 displaySome={ displaySome }
                                 calendarIsFiltered={ calendarIsFiltered }
                                 isShowHosting={ isShowHosting } />
            }
            {
                !isFetching && mappedNotifications
            }
            </div>

        </div>
    );
};

export default Feed;
