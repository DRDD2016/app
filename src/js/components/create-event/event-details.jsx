import React from 'react';
import { Link } from 'react-router';

class EventDetails extends React.Component {
    constructor (props){
        super(props);
    }

    componentDidMount () {
        if (this.props.shouldGetFBFriends) {
            this.props.getFBFriends();
        }
    }

    render () {
        return (
            <div className="">
                <div className="">
                    <div className="row">
                        <h2 className="twelve columns title">Event details</h2>
                    </div>
                </div>
                <div className="">
                    <div className="">
                        <input
                            onChange={ this.props.handleChange.bind(this, 'eventName') }
                            value={ this.props.eventDetails ? this.props.eventDetails.eventName : '' }
                            type="text"
                            placeholder="Event name" />
                    </div>
                </div>
                <div className="">
                    <div className="">
                        <input
                            onChange={ this.props.handleChange.bind(this, 'eventDescription') }
                            value={ this.props.eventDetails ? this.props.eventDetails.eventDescription : '' }
                            type="text"
                            placeholder="Event description" />
                    </div>
                </div>
                <div className="">
                    <div className="">
                        <Link to='/create-event/what'>
                            <button>
                                Next
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default EventDetails;
