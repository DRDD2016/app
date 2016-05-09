import React from 'react';
import Poll from './poll.jsx';

class Event extends React.Component {

    constructor (props) {
        super(props);
    }

    componentWillMount () {
        this.props.fetchEvent(this.props.params.eventID);
    }

    renderView () {

        if (this.props.isHost){
            return (
                 <div>This is the host page</div>
            );
        }
        if (!this.props.isHost && this.props.isPoll) {
            return (
                <Poll event= {this.props.event }
                      toggleSelection={ this.props.toggleSelection }
                      poll={ this.props.poll }
                      handlePollConfirmation={ this.props.handlePollConfirmation }
                      eventID={ this.props.params.eventID }
                />
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
