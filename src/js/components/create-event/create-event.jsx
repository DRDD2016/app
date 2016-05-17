import React from 'react';
import classnames from 'classnames';


class CreateEvent extends React.Component {

    constructor (props){
        super(props);
    }

    capitalizeFirstLetter (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
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
        let hideEventDetails = this.props.eventDetails.eventName != "" && this.props.eventDetails.eventDescription != "" && this.props.location.pathname.split('/').pop() != "create-event";
        console.log(hideEventDetails);
        let eventDetails = classnames("row event-details-header", {
            "display-none": hideEventDetails == false
        });
        return (
            <div>
                <div className="event-header row">
                    <p className="three columns back-button" onClick={ this.context.router.goBack }> Back </p>
                    <h3 className=" six columns title"> { this.eventType() }</h3>
                    <p className="three columns cancel-event-creation" onClick={ () => { this.cancelEvent(); } }> Cancel </p>
                </div>

                <div className={ eventDetails }>
                    <p> { this.props.eventDetails.eventName }</p>
                    <p> { this.props.eventDetails.eventDescription }</p>
                </div>

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
