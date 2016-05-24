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

        let going = this.props.RSVPs.going;
        let notGoing = this.props.RSVPs.notGoing;
        let maybe = this.props.RSVPs.maybe;
        let responded = going.concat(maybe, notGoing);

        function notRespondedList (responded, invitees) {

            if (responded.length === 0) {
                return invitees.map((userObject) => {
                    return (
                        <div className="ui image label" key={userObject.firstName}>
                            <img src={userObject.photoURL} />
                                  {userObject.firstName}
                        </div>
                    );
                });
            } else {
                return responded.map((id, index) => {
                    let user = invitees.filter((userObject) => {
                        return id !== userObject.id;
                    });
                    return (
                        <div className="ui image label large">
                            <img src={user[0].photoURL} key={user[0].firstName} />
                              {user[0].firstName}
                        </div>

                    );
                });
            }
        }



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
                <div className="twelve columns">
                        { notRespondedList(responded, this.props.invitees) }
                </div>

                <div className="row">
                <div className="four columns">
                    <div onClick={ onClickRSVP }> Going </div>

                    <div className="ui middle aligned selection list">
                        { RSVPUserList( this.props.RSVPs, this.props.invitees, 'going') }
                    </div>
                </div>

                <div className="four columns">
                    <div onClick={ onClickRSVP }> Maybe </div>

                    <div className=" ui middle aligned selection list">
                        { RSVPUserList( this.props.RSVPs, this.props.invitees, 'maybe') }
                    </div>
                </div>

                <div className="four columns">
                    <div onClick={ onClickRSVP }> Not Going </div>

                    <div className="ui middle aligned selection list">
                        { RSVPUserList( this.props.RSVPs, this.props.invitees, 'notGoing') }
                    </div>
                </div>
                </div>



            </div>


        );
    }

}

export default ConfirmedEvent;
