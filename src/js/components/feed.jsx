import React from 'react';
import Notification from './notification.jsx';
import { Link } from 'react-router';
import getUserID from '../lib/getUserID.js';
import TopBar from './event/top-bar.jsx';
import Spinner from './general/spinner.jsx';
import FilterPanel from './general/filter-panel.jsx';


const Feed = ({ allEvents, notifications, isFetching, handleUpdateNotification, displaySome, displayAll, feedIsFiltered, isShowHosting }) => {

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
                eventName={ data.eventName }
                hasEdited={ data.hasEdited } />
        );
    });

    return (
        <div>
        {
            isFetching && <Spinner />
        }
        {
            !isFetching &&
            <TopBar location={ location } />
        }
            <div className="container feed">
            {
                !isFetching && allEvents.length > 0 &&
                    <FilterPanel displayAll={ displayAll }
                                 displaySome={ displaySome }
                                 dataIsFiltered={ feedIsFiltered }
                                 isShowHosting={ isShowHosting } />
            }
            {
                allEvents.length === 0 && !isFetching &&
                    <div className="no-events-message">
                        You have no events. <br />
                        (Why not create some?)
                    </div>
            }
            {
                notifications.length === 0 && isShowHosting &&
                    <div className="no-events-message">
                        You are not hosting any events. <br />
                        (Why not create some?)
                    </div>
            }
            {
                notifications.length === 0 && isShowHosting === false &&
                    <div className="no-events-message">
                        You have not been invited to any events.
                    </div>
            }
            {
                !isFetching && mappedNotifications
            }
            </div>

        </div>
    );
};

export default Feed;
