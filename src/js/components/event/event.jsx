import React from 'react';
import InviteePoll from './invitee-poll.jsx';
import HostPoll from './host-poll.jsx';
import Spinner from '../general/spinner.jsx';
import EventDetailsHeader from '../general/event-details-header.jsx';


class Event extends React.Component {

    constructor (props) {
        super(props);
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
                <div>
                    <div> This is host confirmed event view</div>
                     <HostConfirmedEvent event={ this.props.event }
                                         RSVP={ this.props.RSVP }
                                         eventID={ this.props.eventID }
                                         isHost={ this.props.userIsHost}/>
                </div>
            );
        }
        if (!this.props.isHost && !this.props.isPoll){
            return (
                <div> This is invitee confirmed event view</div>
            );
        }
    }
    render () {

        if (this.props.isFetching) {
            return (
                <Spinner />
            );
        } else {
            return (
                <div>
                    <EventDetailsHeader location={ this.props.location.pathname.split('/').pop() }
                                        eventName={ this.props.event.eventName }
                                        eventDescription={ this.props.event.eventDescription } />
                    <div className="container">
                        {this.renderView()}
                    </div>
                </div>
            );
        }

    }
}

export default Event;
