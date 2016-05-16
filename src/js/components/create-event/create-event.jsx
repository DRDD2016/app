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
                    <h2 className=" twelve columns title"> { this.eventType() }</h2>
                </div>

                <div className="container">
                    { this.props.children }
                </div>
            </div>
        );
    }
}

export default CreateEvent;
