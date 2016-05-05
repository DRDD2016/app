import React from 'react';

class EventContainer extends React.Component {

    constructor (props) {
        super(props);
    }

    componentWillMount () {
        this.props.getEvent();
    }

    render () {

        return (
            <div>

                {
                    this.props.isFetching && <div>Loading...</div>
                }
                {
                    this.props.isHost && <div>This is the host page</div>
                }
                {
                    !this.props.isHost && this.props.isPoll && <div>This is a poll page</div>
                }
                {
                    !this.props.isHost && !this.props.isPoll && <div>This is the confirmed event</div>
                }
            </div>
        );
    }
}
