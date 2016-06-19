import React from 'react';
import { Link } from 'react-router';

const TopBar = ({ eventID, handleEdit, displayCancelModal, isPoll, userIsHost, event }) => {
    return (
        <div className="event-header row">
            {
                //User is Host and its a Poll
                userIsHost && isPoll &&
            <div>
                <p className="three columns back-button" > </p>
                <h3 className=" six columns title">Poll</h3>
                <p className="three columns cancel-event-button"></p>
            </div>
            }
            {
                //User is Invitee and its an Event
                !userIsHost && !isPoll &&
            <div>
                <p className="three columns back-button" > </p>
                <h3 className=" six columns title">Event</h3>
                <p className="three columns cancel-event-button"></p>
            </div>
            }
            {
                //User is Invitee and its a Poll
                !userIsHost && isPoll &&
            <div>
                <p className="three columns back-button" > </p>
                <h3 className=" six columns title">Poll</h3>
                <p className="three columns cancel-event-button"></p>
            </div>
            }
            {
                //User is Host and its an Event
                userIsHost && !isPoll &&
            <div>
                <Link onClick={ () => { handleEdit(event); } } to={ 'edit/' + eventID }>
                    <p className="three columns back-button" > Edit </p>
                </Link>
                <h3 className=" six columns title">Event</h3>
                <p className="three columns cancel-event-button"
                    onClick={ displayCancelModal }>
                    Cancel
                </p>
            </div>
            }
        </div>
    );
};

export default TopBar;
