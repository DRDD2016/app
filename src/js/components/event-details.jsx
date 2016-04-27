import React from 'react';
import { Link } from 'react-router';

class CreateEvent extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        if (this.props.shouldGetFBFriends) {
            this.props.getFBFriends();
        }
    }

    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="twelve columns">
                        <h2>Event details</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="twelve columns">
                        <input
                            onChange={ this.props.handleChange.bind(this, 'eventName') }
                            value={ this.props.eventDetails ? this.props.eventDetails.eventName : '' }
                            type="text"
                            placeholder="Event name" />
                    </div>
                </div>
                <div className="row">
                    <div className="twelve columns">
                        <input
                            onChange={ this.props.handleChange.bind(this, 'eventDescription') }
                            value={ this.props.eventDetails ? this.props.eventDetails.eventDescription: '' }
                            type="text"
                            placeholder="Event description" />
                    </div>
                </div>
                <div className="row">
                    <div className="twelve columns">
                        <button><Link to='/create-event/what'>Next</Link></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateEvent;
