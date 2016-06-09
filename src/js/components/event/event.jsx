import React from 'react';
import InviteePoll from './invitee-poll.jsx';
import HostPoll from './host-poll.jsx';
import Spinner from '../general/spinner.jsx';
import EventDetailsHeader from '../general/event-details-header.jsx';
import ConfirmedEvent from './confirmed-event.jsx';
import Modal from '../general/modal.jsx';
import { Link, hashHistory } from 'react-router';


class Event extends React.Component {

    constructor (props) {
        super(props);
        this.handleDeleteEvent = this.handleDeleteEvent.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    cancelEventConfirmationModal () {
        document.getElementsByClassName('modal-container')[0]
            .style.display = "flex";
    }

    handleDeleteEvent () {
        this.props.handleDeleteEvent(this.props.params.eventID);
        hashHistory.push('/feed');
        this.handleCloseModal();
    }

    handleCloseModal () {
        document.getElementsByClassName('modal-container')[0]
            .style.display = "none";
    }

    renderView () {

        if (this.props.isPoll === undefined || this.props.userIsHost === undefined) {
            return (
                <Spinner />
            );
        }
        if (this.props.userIsHost && this.props.isPoll) {

            return (
                 <HostPoll tally={ this.props.tally }
                           event={ this.props.event }
                           eventID={ this.props.params.eventID }
                           handleHostEventChoices={ this.props.handleHostEventChoices }
                           hostEventChoices={ this.props.hostEventChoices }
                           handleConfirmEvent={ this.props.handleConfirmEvent }/>
            );
        }
        if (!this.props.userIsHost && this.props.isPoll) {
            return (
                <InviteePoll event={ this.props.event }
                          toggleSelection={ this.props.toggleSelection }
                          poll={ this.props.poll }
                          handlePollConfirmation={ this.props.handlePollConfirmation }
                          eventID={ this.props.params.eventID }
                          isHost={ this.props.userIsHost }
                          hasVoted={ this.props.hasVoted }/>
            );
        }
        if (!this.props.isPoll) {
            return (
                 <ConfirmedEvent event={ this.props.event }
                                 eventID={ this.props.params.eventID }
                                 userIsHost={ this.props.userIsHost }
                                 RSVPs={ this.props.RSVPs }
                                 RSVPToEvent={ this.props.RSVPToEvent }
                                 invitees={ this.props.invitees }
                                 handleUploadPhoto={ this.props.handleUploadPhoto }
                                 photos={ this.props.photos }
                                 deletedPhotos={ this.props.deletedPhotos }
                                 handleDeletePhoto={ this.props.handleDeletePhoto }
                                 handleSharePhoto={ this.props.handleSharePhoto }
                                 file={ this.props.file }
                                 handleSetPhoto={ this.props.handleSetPhoto }/>
            );
        }
    }
    render () {

        let headerTitle = this.props.isPoll ? "Poll" : "Event";

        if (this.props.isFetching) {
            return (
                <Spinner />
            );
        }
        if (this.props.event === false) {
            return (
                <div>
                    The Event has been deleted
                </div>
            );
        }
        if (this.props.userIsHost && !this.props.isPoll) {
            return (
                <div>

                    <Modal deleteEvent={ this.handleDeleteEvent }
                           closeModal={ this.handleCloseModal } />

                    <div className="event-header row">
                        <Link onClick={ () => { this.props.handleEdit(this.props.event); } } to={ 'edit/' + this.props.params.eventID }>
                            <p className="three columns back-button" > Edit </p>
                        </Link>
                        <h3 className=" six columns title"> { headerTitle }</h3>
                        <p className="three columns cancel-event-button"
                           onClick={ this.cancelEventConfirmationModal }>
                            Cancel
                        </p>
                    </div>

                    <EventDetailsHeader location={ this.props.location.pathname.split('/').pop() }
                                        eventName={ this.props.event.eventName }
                                        eventDescription={ this.props.event.eventDescription }
                                        hostPhotoURL={ this.props.event.hostPhotoURL } />
                    <div className="container">
                        { this.renderView() }
                    </div>
                </div>
            );
        } if (this.props.userIsHost && this.props.isPoll) {
            return (
                <div>

                    <Modal deleteEvent={ this.handleDeleteEvent }
                           closeModal={ this.handleCloseModal } />

                    <div className="event-header row">
                        <p className="three columns back-button" > </p>
                        <h3 className=" six columns title"> { headerTitle }</h3>
                        <p className="three columns cancel-event-button"
                            onClick={ this.cancelEventConfirmationModal }>
                            Cancel
                        </p>
                    </div>

                    <EventDetailsHeader location={ this.props.location.pathname.split('/').pop() }
                                        eventName={ this.props.event.eventName }
                                        eventDescription={ this.props.event.eventDescription }
                                        hostPhotoURL={ this.props.event.hostPhotoURL } />
                    <div className="container">
                        { this.renderView() }
                    </div>
                </div>
            );
        } else {
            return (
                <div>

                    <div className="event-header row">
                        <h3 className=" twelve columns title"> { headerTitle }</h3>
                    </div>

                    <EventDetailsHeader location={ this.props.location.pathname.split('/').pop() }
                                        eventName={ this.props.event.eventName }
                                        eventDescription={ this.props.event.eventDescription }
                                        hostPhotoURL={ this.props.event.hostPhotoURL } />
                    <div className="container">
                        { this.renderView() }
                    </div>
                </div>
            );
        }

    }
}


export default Event;
