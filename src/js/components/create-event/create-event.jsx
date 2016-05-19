import React from 'react';
import classnames from 'classnames';
import EventDetailsHeader from '../general/event-details-header.jsx';

class CreateEvent extends React.Component {

    constructor (props){
        super(props);
    }

    eventType () {
        let pathname = this.props.location.pathname.split('/').pop();
        return pathname.charAt(0).toUpperCase() + pathname.slice(1);
    }

    cancelEvent () {
        this.props.discardEvent();
        this.context.router.push('/feed');
    }


    render () {
        let hideEventDetails = this.props.eventDetails.eventName === "" || this.props.eventDetails.eventDescription === "" || this.props.location.pathname.split('/').pop() === "create-event";
        let eventDetails = classnames("row event-details-header", {
            "display-none": hideEventDetails
        });
        return (
            <div>
                <div className="event-header row">
                    <p className="three columns back-button" onClick={ this.context.router.goBack }> Back </p>
                    <h3 className=" six columns title"> { this.eventType() }</h3>
                    <p className="three columns cancel-event-button" onClick={ () => { this.cancelEvent(); } }> Cancel </p>
                </div>

                <EventDetailsHeader classes={ eventDetails }
                                    eventName={ this.props.eventDetails.eventName }
                                    eventDescription={ this.props.eventDetails.eventDescription } />




                <div className="container">
                    { this.props.children }
                </div>
            </div>
        );
    }
}


CreateEvent.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default CreateEvent;
