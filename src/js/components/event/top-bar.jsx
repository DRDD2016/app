import React from 'react';
import { Link } from 'react-router';
import { hashHistory } from 'react-router';

const TopBar = (props) => {

    const { location, eventID, event, isPoll, userIsHost,
            handleEdit, displayCancelModal, discardEvent } = props;

    const eventType = (location) => {

        let pathname = location.pathname.split('/').pop();

        if (pathname === "create-event") {
            return "Create an event";
        } else {
            return pathname.charAt(0).toUpperCase() + pathname.slice(1) + "?";
        }
    };

    const cancelEvent = () => {

        discardEvent();
        hashHistory.push('/feed');
    };

    return (
        <div className="event-header row">
            {
                /* /feed */
                !event && location.pathname === '/' &&
                <h3 className=" twelve columns title">Feed</h3>
            }
            {
                /* /create-event */
                !event && location.pathname === '/create-event' &&
                <div>
                    <p className="three columns back-button" onClick={ () => { hashHistory.goBack(); } }> Back </p>
                    <h3 className=" six columns title"> { eventType(location) }</h3>
                    <p className="three columns cancel-event-button" onClick={ () => { cancelEvent(); } }> Cancel </p>
                </div>
            }
            {
                /* /calendar */
                !event && location.pathname === '/albums' &&

                <div>
                    <p className="three columns back-button" > </p>
                    <h3 className=" six columns title">
                        { location.pathname.charAt(1).toUpperCase() + location.pathname.slice(2) }
                    </h3>
                    <p className="three columns cancel-event-button"></p>
                </div>
            }
            {
                /* /calendar */
                !event && location.pathname === '/calendar' &&

                <div>
                    <p className="three columns back-button" > </p>
                    <h3 className=" six columns title">
                        { location.pathname.charAt(1).toUpperCase() + location.pathname.slice(2) }
                    </h3>
                    <p className="three columns cancel-event-button"></p>
                </div>
            }

            {
                !event && location.pathname === "/profile" &&
                <h3 className="twelve columns title">Profile</h3>
            }
            { /**** EVENT ****/ }
            {
                //User is Host and its a Poll
                event && userIsHost && isPoll &&
                <div>
                    <p className="three columns back-button" > </p>
                    <h3 className=" six columns title">Poll</h3>
                    <p className="three columns cancel-event-button"></p>
                </div>
            }
            {
                //User is Invitee and its an Event
                event && !userIsHost && !isPoll &&
                <div>
                    <p className="three columns back-button" > </p>
                    <h3 className=" six columns title">Event</h3>
                    <p className="three columns cancel-event-button"></p>
                </div>
            }
            {
                //User is Invitee and its a Poll
                event && !userIsHost && isPoll &&
                <div>
                    <p className="three columns back-button" > </p>
                    <h3 className=" six columns title">Poll</h3>
                    <p className="three columns cancel-event-button"></p>
                </div>
            }
            {
                //User is Host and its an Event
                event && userIsHost && !isPoll &&
                <div>
                    <Link onClick={ () => { handleEdit(event); } } to={ 'edit/' + eventID }>
                        <p className="three columns back-button"> Edit </p>
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
