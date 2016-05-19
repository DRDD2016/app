import React from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';

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

        let hideNext = this.props.eventDetails.eventName === "" || this.props.eventDetails.eventDescription === "";

        let nextButtonClasses = classnames("twelve columns", {
            "display-none": hideNext
        });

        return (
            <div className="justify">

                <p className="text-snippet">
                    Enter the name of your event an a description.
                </p>

                <div className="row">
                    <input
                        className="twelve columns"
                        onChange={ this.props.handleChange.bind(this, 'eventName') }
                        value={ this.props.eventDetails ? this.props.eventDetails.eventName : '' }
                        type="text"
                        placeholder="Event name" />

                </div>

                <div className="row">
                    <input
                        className="twelve columns"
                        onChange={ this.props.handleChange.bind(this, 'eventDescription') }
                        value={ this.props.eventDetails ? this.props.eventDetails.eventDescription : '' }
                        type="text"
                        placeholder="Event description" />
                </div>

                <div className="row">
                    <Link to='/create-event/what'>
                        <button className={ nextButtonClasses }>
                            Next
                        </button>
                    </Link>
                </div>

            </div>
        );
    }
}

export default EventDetails;
