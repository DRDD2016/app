import React from 'react';

class CreateEvent extends React.Component {

    render () {

        return (
            <div>
                <div>

                    <h4>
                        Create an event
                    </h4>
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default CreateEvent;
