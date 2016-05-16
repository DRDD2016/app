import React from 'react';
import Notification from './notification.jsx';
import { Link } from 'react-router';
import getUserID from '../lib/getUserID.js';
import Spinner from './general/spinner.jsx';


const Feed = ({ notifications, isFetching }) => {

    let mappedNotifications = notifications.map((data, i) => {

        return (
            <Notification
                key={ i }
                eventID={ data.eventID }
                timestamp={ data.timestamp }
                isPoll={ data.isPoll }
                firstName={ data.firstName }
                lastName={ data.lastName }
                photoURL={ data.photoURL }
                eventWhat={ data.eventWhat }
                eventWhere={ data.eventWhere }
                eventWhen={ data.eventWhen }
                userIsHost={ data.hostID == getUserID() } />
        );
    });

    return (

        <div>
            {
                isFetching && <Spinner />
            }
            <div className="row">
                <h4 className="twelve columns">Feed</h4>
            </div>
            { mappedNotifications }
        </div>
    );
};

export default Feed;
