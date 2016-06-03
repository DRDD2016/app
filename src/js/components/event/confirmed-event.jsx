import React from 'react';
import classnames from 'classnames';
import EventDetailsHeader from '../general/event-details-header.jsx';
import { RSVPUserList, eventNote } from '../../lib/confirmed-event-helpers.js';


const ConfirmedEvent = ({ event, eventID, RSVPs, invitees, userIsHost, RSVPToEvent, handleUploadPhoto }) => {

    let handleClick = !userIsHost ? RSVPToEvent : '';
    let going = RSVPs.going;
    let notGoing = RSVPs.notGoing;
    let maybe = RSVPs.maybe;
    let responded = going.concat(maybe, notGoing);

    let photo;

    function getPhoto (e) {
        var file = e.target.files[0];
        var reader = new FileReader();

        if (file) {
            reader.onload = (event) => {
                photo = event.target.result;
            };
        }

        reader.readAsDataURL(file);

    }

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

            { eventNote(event) }
            <div className="row">
                <h4 className="twelve columns">
                    What
                </h4>
            </div>

            <div className="row">
                <div className="twelve columns">
                    { event.eventWhat[0] || "TBC" }
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
                    { event.eventWhere[0].placeName || "TBC" } { event.eventWhere[0].placeName }
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
                    <span className="eventWhen-date">
                        { event.eventWhen[0].date || "TBC" }
                    </span>
                    <span className="eventWhen-time">
                        { event.eventWhen[0].time || "TBC" }
                    </span>
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

            <div className="row">
            <input onChange={ getPhoto } type="file" accept="image/*;capture=camera" />
        <button onClick={ () => { handleUploadPhoto(photo, eventID); } } className="twelve columns">
                    Upload a photo
                </button>
            </div>
        </div>
    );

};

export default ConfirmedEvent;
