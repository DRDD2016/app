import React from 'react';

class CreateEvent extends React.Component {

    render () {

        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default CreateEvent;
