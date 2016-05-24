import React from 'react';
import classnames from 'classnames';
import EventDetailsHeader from '../general/event-details-header.jsx';


class ConfirmedEvent extends React.Component {

    constructor (props) {
        super(props);
    }

    render () {
        let event = this.props.event;
        let onClickRSVP = !this.props.isHost ? this.props.handleEventRSVP : '';

        function RSVPUserList (RSVPs, invitees, status) {
            return RSVPs[status].map((id, index) => {
                let user = invitees.filter((userObject) => {
                    return id === userObject.id;
                });
                return (
                    <div className="item" key={user[0].id}>
                        <img className="ui avatar image" src={user[0].photoURL} />
                        <div className="content">
                            <div className="header">{user[0].firstName}</div>
                        </div>
                    </div>
                );
            });
        }

        console.log(RSVPUserList(fakeRSVPs, fakeInvitees, 'going'));

        return (
            <div>

                This is the confirmed event page for both host and inviteed.
                <div>
                    What { event.eventWhat[0] }
                </div>
                <div>
                    Where { event.eventWhere[0].placeName } { event.eventWhere[0].placeName }
                </div>
                <div>
                    When { event.eventWhen[0].date } { event.eventWhen[0].date }
                </div>


                <div className="four columns">
                    <div onClick={ onClickRSVP }> Going </div>

                    <div className="four columns ui middle aligned selection list">
                        { RSVPUserList( this.props.RSVPs, this.props.invitees, 'going') }
                    </div>
                </div>

                <div className="four columns">
                    <div onClick={ onClickRSVP }> Maybe </div>

                    <div className="four columns ui middle aligned selection list">
                        { RSVPUserList( this.props.RSVPs, this.props.invitees, 'maybe') }
                    </div>
                </div>

                <div className="four columns">
                    <div onClick={ onClickRSVP }> Not Going </div>

                    <div className="four columns ui middle aligned selection list">
                        { RSVPUserList( this.props.RSVPs, this.props.invitees, 'notGoing') }
                    </div>
                </div>



            </div>


        );
    }

}

export default ConfirmedEvent;
