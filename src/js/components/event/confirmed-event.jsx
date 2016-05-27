import React from 'react';
import classnames from 'classnames';
import EventDetailsHeader from '../general/event-details-header.jsx';


const ConfirmedEvent = ({ event, eventID, RSVPs, invitees, userIsHost, RSVPToEvent }) => {

    let handleClick = !userIsHost ? RSVPToEvent : '';

    function RSVPUserList (RSVPs, invitees, status) {

        return RSVPs[status].map((id, index) => {

            let usersWithRSVP = invitees.filter((userObject) => {
                return id === userObject.id;
            });

            return (
                <div className="twelve columns">
                    <div className="ui image label" key={ usersWithRSVP[0].id }>
                        <img src={ usersWithRSVP[0].photoURL } />
                        { usersWithRSVP[0].firstName }
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
            <br />

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
            <br />

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
            <br />

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

            <div className="four columns ui middle aligned selection list verticalise">
                { RSVPUserList(RSVPs, invitees, 'going') }
            </div>

            <div className="four columns ui middle aligned selection list verticalise">
                { RSVPUserList(RSVPs, invitees, 'maybe') }
            </div>

            <div className="four columns ui middle aligned selection list verticalise">
                { RSVPUserList(RSVPs, invitees, 'notGoing') }
            </div>


        </div>
    );

};

export default ConfirmedEvent;
