import React from 'react';
import { Link } from 'react-router';
import { hashHistory } from 'react-router';

class TopBar extends React.Component {

    constructor (props) {
        super(props);
    }

    eventType (location) {

        let pathname = location.pathname.split('/').pop();

        if (pathname === "create-event") {
            return "Create an event";
        } else {
            return pathname.charAt(0).toUpperCase() + pathname.slice(1) + "?";
        }
    }

    cancelEvent () {

        this.props.discardEvent();
        hashHistory.push('/feed');
    }

    render () {
        
        let primaryPath = this.props.location.pathname.split('/')[1];

        return (
            <div className="event-header row">
                {
                    /* feed */
                    !this.props.eventID && primaryPath === '' &&
                    <h3 className=" twelve columns title">Feed</h3>
                }
                {
                    /* /create-event */
                    !this.props.eventID && primaryPath === 'create-event' &&
                    <div>
                        <p className="three columns back-button" onClick={ () => { hashHistory.goBack(); } }> Back </p>
                        <h3 className=" six columns title"> { this.eventType(this.props.location) }</h3>
                        <p className="three columns cancel-event-button" onClick={ () => { this.cancelEvent(); } }> Cancel </p>
                    </div>
                }
                {
                    /* /calendar */
                    !this.props.eventID && primaryPath === 'albums' &&

                    <div>
                        <p className="three columns back-button" > </p>
                        <h3 className=" six columns title">
                            { primaryPath.charAt(0).toUpperCase() + primaryPath.slice(1) }
                        </h3>
                        <p className="three columns cancel-event-button"></p>
                    </div>
                }
                {
                    /* /calendar */
                    !this.props.eventID && primaryPath === 'calendar' &&

                    <div>
                        <p className="three columns back-button" > </p>
                        <h3 className=" six columns title">
                            { primaryPath.charAt(0).toUpperCase() + primaryPath.slice(1) }
                        </h3>
                        <p className="three columns cancel-event-button"></p>
                    </div>
                }

                {
                    !this.props.eventID && primaryPath === "profile" &&
                    <h3 className="twelve columns title">Profile</h3>
                }
                { /**** EVENT ****/ }
                {
                    //User is Host and its a Poll
                    this.props.eventID && this.props.userIsHost && this.props.isPoll &&
                    <div>
                        <p className="three columns back-button" > </p>
                        <h3 className=" six columns title">Poll</h3>
                        <p className="three columns cancel-event-button"></p>
                    </div>
                }
                {
                    //User is Invitee and its an Event
                    this.props.eventID && !this.props.userIsHost && !this.props.isPoll &&
                    <div>
                        <p className="three columns back-button" > </p>
                        <h3 className=" six columns title">Event</h3>
                        <p className="three columns cancel-event-button"></p>
                    </div>
                }
                {
                    //User is Invitee and its a Poll
                    this.props.eventID && !this.props.userIsHost && this.props.isPoll &&
                    <div>
                        <p className="three columns back-button" > </p>
                        <h3 className=" six columns title">Poll</h3>
                        <p className="three columns cancel-event-button"></p>
                    </div>
                }
                {
                    //User is Host and its an Event
                    this.props.eventID && this.props.userIsHost && !this.props.isPoll &&
                    <div>
                        <Link onClick={ () => { handleEdit(this.props.event); } } to={ 'edit/' + this.props.eventID }>
                            <p className="three columns back-button"> Edit </p>
                        </Link>
                        <h3 className=" six columns title">Event</h3>
                        <p className="three columns cancel-event-button"
                            onClick={ this.props.displayCancelModal }>
                            Cancel
                        </p>
                    </div>
                }
            </div>
        );
    }
}

export default TopBar;
