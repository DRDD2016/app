import React from 'react';

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

    render () {

        return (
            <div>
                <div className="event-header row">
                    <p className="three columns"><i className="step backward icon"></i> Back </p>
                    <h2 className=" six columns title"> { this.eventType() }</h2>
                    <p className="three columns"> Cancel </p>
                </div>

                <div className="container">
                    { this.props.children }
                </div>
            </div>
        );
    }
}

export default CreateEvent;
