import React from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';
import validCookieExists from '../../lib/validCookieExists.js';

class EventDetails extends React.Component {

    constructor (props){
        super(props);
    }

    componentDidMount () {

        if (validCookieExists() && this.props.shouldGetFBFriends) {

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

                <p>
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
                    <textarea
                        className="twelve columns event-note"
                        onChange={ this.props.handleChange.bind(this, 'eventNote') }
                        value={ this.props.eventDetails ? this.props.eventDetails.eventNote : '' }
                        rows="5"
                        placeholder="Leave a note to your friends (optional)" />
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
