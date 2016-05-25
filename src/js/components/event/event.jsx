import React from 'react';
import InviteePoll from './invitee-poll.jsx';
import HostPoll from './host-poll.jsx';
import Spinner from '../general/spinner.jsx';
import EventDetailsHeader from '../general/event-details-header.jsx';
import ConfirmedEvent from './confirmed-event.jsx';
import CancelConfirmedEventModal from './cancel-confirmed-event-modal.jsx';


class Event extends React.Component {

    constructor (props) {
        super(props);
        this.handleDeleteEvent = this.handleDeleteEvent.bind(this);
    }

    cancelEventConfirmationModal () {
        $('.ui.basic.modal')
            .modal('show');
    }

    handleDeleteEvent () {
        $('.ui.basic.modal')
            .modal('hide');
        this.props.handleDeleteEvent(this.props.params.eventID);
    }

    handleCloseModal () {
        $('.ui.basic.modal')
            .modal('hide');
    }



    renderView () {

        if (this.props.userIsHost && this.props.isPoll) {

            return (
                 <HostPoll tally= { this.props.tally }
                           event= { this.props.event }
                           eventID= { this.props.params.eventID }
                           handleHostEventChoices= { this.props.handleHostEventChoices }
                           hostEventChoices= { this.props.hostEventChoices }
                           handleConfirmEvent= { this.props.handleConfirmEvent }/>
            );
        }
        if (!this.props.userIsHost && this.props.isPoll) {
            return (
                <InviteePoll event= { this.props.event }
                      toggleSelection= { this.props.toggleSelection }
                      poll={ this.props.poll }
                      handlePollConfirmation={ this.props.handlePollConfirmation }
                      eventID={ this.props.params.eventID }
                      isHost={ this.props.userIsHost }
                />
            );
        }
        if (this.props.userIsHost && !this.props.isPoll) {
            return (
                     <ConfirmedEvent event={ this.props.event }
                                     eventID={ this.props.params.eventID }
                                     isHost={ this.props.userIsHost }
                                     RSVPs={this.props.RSVPs}
                                     invitees={this.props.invitees}/>
            );
        }
        if (!this.props.isHost && !this.props.isPoll){
            return (
                <ConfirmedEvent event={ this.props.event }
                                eventID={ this.props.params.eventID }
                                isHost={ this.props.userIsHost }
                                RSVPs={this.props.RSVPs}
                                invitees={this.props.invitees}/>
            );
        }
    }
    render () {

        let headerTitle = this.props.isPoll ? "Poll" : "Event";
        if (this.props.isFetching) {
            return (
                <Spinner />
            );
        } if (this.props.userIsHost) {
            return (
                <div>

                    <CancelConfirmedEventModal
                        handleDeleteEvent={this.handleDeleteEvent}
                        handleCloseModal={this.handleCloseModal} />

                    <div className="event-header row">
                        <p className="three columns back-button" > Edit </p>
                        <h3 className=" six columns title"> { headerTitle }</h3>
                        <p className="three columns cancel-event-button"
                            onClick={ this.cancelEventConfirmationModal }>
                            Cancel </p>
                    </div>

                    <EventDetailsHeader location={ this.props.location.pathname.split('/').pop() }
                                        eventName={ this.props.event.eventName }
                                        eventDescription={ this.props.event.eventDescription }
                                        hostPhotoURL={ this.props.event.hostPhotoURL } />
                    <div className="container">
                        {this.renderView()}
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
                        {this.renderView()}
                    </div>
                </div>
            );
        }

    }
}

export default Event;
