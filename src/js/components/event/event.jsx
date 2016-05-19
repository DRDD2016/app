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
                           handleconfirmedEventSelection= { this.props.handleconfirmedEventSelection }/>
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
                 <div>This is the host confirmed event page</div>
            );
        }
        if (!this.props.isHost && !this.props.isPoll){
            return (
                <div>This is the confirmed event</div>
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
