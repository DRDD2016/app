import React from 'react';
import classnames from 'classnames';

class ConfirmedEvent extends React.Component {

    constructor (props) {
        super(props);
    }

    render () {
        let event = this.props.event;
        return (
            <div>
                this is the confirmed event page for both host and inviteed.
                <div>
                    What { event.eventWhat[0] }
                </div>
                <div>
                    Where { event.eventWhere[0].placeName } + { event.eventWhere[0].placeName }
                </div>
                <div>
                    When { event.eventWhen[0].date } + { event.eventWhen[0].date }
                </div>

                
            </div>


        );
    }

}
