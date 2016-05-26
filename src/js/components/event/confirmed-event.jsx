import React from 'react';
import classnames from 'classnames';
import EventDetailsHeader from '../general/event-details-header.jsx';


const ConfirmedEvent = ({ event, eventID, RSVPs, invitees, userIsHost, RSVPToEvent }) => {

    let handleClick = !userIsHost ? RSVPToEvent : '';

    function RSVPUserList (RSVPs, invitees, status) {

        return RSVPs[status].map((id, index) => {

            let user = invitees.filter((userObject) => {
                return id === userObject.id;
            });

            return (
                <div className="row" key={ user[0].id }>
                    <div className="four columns">
                        <div className="item" >
                            <img className="ui avatar image" src={ user[0].photoURL } />
                            STATUS: {status}
                            <div className="content">
                                <div className="header">{ user[0].firstName }</div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    }

    let going = RSVPs.going;
    let notGoing = RSVPs.notGoing;
    let maybe = RSVPs.maybe;
    let responded = going.concat(maybe, notGoing);

    let notRespondedList = (responded, invitees) => {

        let notResponded = invitees.filter((invitedUser, index) => {
            return responded.indexOf(invitedUser.id) === -1;
        });

        return notResponded.map((user, i) => {
            return (
                <div className="ui image label" key={ user.id }>
                    <img src={ user.photoURL } />
                    { user.firstName }
                </div>
            );
        });
    };

    return (
        <div>
            <div className="row">
                <h4 className="twelve columns">
                    What
                </h4>
            </div>

            <div className="row">
                <div className="twelve columns">
                    { event.eventWhat[0] }
                </div>
            </div>

            <div className="row">
                <h4 className="twelve columns">
                    Where
                </h4>
            </div>

            <div className="row">
                <div className="twelve columns">
                    { event.eventWhere[0].placeName } { event.eventWhere[0].placeName }
                </div>
            </div>

            <div className="row">
                <h4 className="twelve columns">
                    When
                </h4>
            </div>

            <div className="row">
                <div className="twelve columns">
                    { event.eventWhen[0].date } { event.eventWhen[0].date }
                </div>
            </div>

            <hr />

            <div className="row">
                <div className="twelve columns">
                    <div>Not responded</div>
                    { notRespondedList(responded, invitees) }
                </div>
            </div>

            <hr />

            <div className="row">
                <div className="four columns">
                    <div onClick={ () => handleClick('going', eventID) }> Going </div>
                </div>

                <div className="four columns">
                    <div onClick={ () => handleClick('maybe', eventID) }> Maybe </div>
                </div>

                <div className="four columns">
                    <div onClick={ () => handleClick('notGoing', eventID) }> Not Going </div>
                </div>
            </div>

            <div className="ui middle aligned selection list">
                { RSVPUserList(RSVPs, invitees, 'going') }
            </div>


            <div className=" ui middle aligned selection list">
                { RSVPUserList(RSVPs, invitees, 'maybe') }
            </div>

            <div className="ui middle aligned selection list">
                { RSVPUserList(RSVPs, invitees, 'notGoing') }
            </div>

            <hr />

        </div>
    );

};

export default ConfirmedEvent;
