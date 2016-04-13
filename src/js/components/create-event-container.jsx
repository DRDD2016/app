import React from 'react';

class CreateEventContainer extends React.Component {

    render () {

        return (
            <div>
                <h1>
                    This is Create Event Container
                </h1>
                {this.props.children}
            </div>
        );
    }
}

export default CreateEventContainer;
