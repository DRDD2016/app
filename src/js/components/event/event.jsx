import React from 'react';
import InviteePoll from './invitee-poll.jsx';
import HostPoll from './host-poll.jsx';
import Spinner from '../general/spinner.jsx';
import EventDetailsHeader from '../general/event-details-header.jsx';
import ConfirmedEvent from './confirmed-event.jsx';
import Modal from '../general/modal.jsx';
import TopBar from './top-bar.jsx';
import DeletedEvent from './deleted-event.jsx';
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

        if (this.props.userIsHost && this.props.isPoll) {
            console.log('you are a host viewing poll', this.props.isPoll);
            return (
                <div>

                    <div className="container">
                        <HostPoll tally={ this.props.tally }
                                  event={ this.props.event }
                                  eventID={ this.props.params.eventID }
                                  handleHostEventChoices={ this.props.handleHostEventChoices }
                                  hostEventChoices={ this.props.hostEventChoices }
                                  handleConfirmEvent={ this.props.handleConfirmEvent }/>
                    </div>
                </div>

            );
        } else if (!this.props.userIsHost && this.props.isPoll) {
            console.log('you are a invitee viewing poll');

            return (
                <div>
                    <div className="container">
                        <InviteePoll event={ this.props.event }
                                  toggleSelection={ this.props.toggleSelection }
                                  poll={ this.props.poll }
                                  handlePollConfirmation={ this.props.handlePollConfirmation }
                                  eventID={ this.props.params.eventID }
                                  isHost={ this.props.userIsHost }
                                  hasVoted={ this.props.hasVoted }/>
                    </div>
                </div>
            );
        } else {
            console.log('you are a host/invittee viewing an event');

            return (
                <div>

                    <div className="container">
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
                                        handleSetFile={ this.props.handleSetFile }
                                        getSelectedPhoto={ this.props.getSelectedPhoto }
                                        hasPhotoLoaded={ this.props.hasPhotoLoaded }/>
                    </div>
                </div>

            );
        }
    }


    render () {

        return (
            <div>
                {
                    this.props.isFetching && <Spinner />
                }

                {
                    !this.props.isFetching && (this.props.event === false) && <DeletedEvent />
                }
                {
                    !this.props.isFetching && this.props.event &&
                    <div>
                        <Modal deleteEvent={ this.handleDeleteEvent }
                               closeModal={ this.handleCloseModal } />

                        <TopBar eventID={ this.props.event.eventID }
                                userIsHost={ this.props.userIsHost }
                                isPoll={ this.props.event.isPoll }
                                handleEdit={ this.props.handleEdit }
                                location={ this.props.location }
                                displayCancelModal={ this.cancelEventConfirmationModal }
                                event={ this.props.event } />


                        <EventDetailsHeader
                            location={ this.props.location.pathname.split('/').pop() }
                            eventName={ this.props.event.eventName }
                            eventDescription={ this.props.event.eventDescription }
                            hostPhotoURL={ this.props.event.hostPhotoURL }
                            eventID={ this.props.event.eventID }
                            isPoll={ this.props.event.isPoll }
                            userIsHost={ this.props.event.isHost } />
                    </div>
                }
                {
                    !this.props.isFetching && this.props.event && this.renderView()
                }
            </div>
        );

    }
}


export default Event;
