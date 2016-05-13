import React from 'react';
import InviteePoll from './invitee-poll.jsx';
import HostPoll from './host-poll.jsx';

class Event extends React.Component {

    constructor (props) {
        super(props);
    }

    renderView () {

        if (this.props.userIsHost && this.props.isPoll) {
            return (
                 <HostPoll tally= { this.props.tally }
                           event= { this.props.event }
                           eventID= { this.props.params.eventID }/>
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

        return (
            <div>
                {
                    this.props.isFetching && <div>Loading...</div>
                }
                {
                    !this.props.isFetching && this.renderView()
                }
            </div>
        );
    }
}

export default Event;
