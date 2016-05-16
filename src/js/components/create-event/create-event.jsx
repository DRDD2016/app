import React from 'react';

class CreateEvent extends React.Component {

    render () {

        return (
            <div>
                <h4>
                    Create an event
                </h4>
                { this.props.children }
            </div>
        );
    }
}

export default CreateEvent;
