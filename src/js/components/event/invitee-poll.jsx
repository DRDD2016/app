import React from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';
import PollButton from '../general/poll-button.jsx';
import { EventWhatSection, EventWhereSection, EventWhenSection } from './invitee-poll-sections.jsx';

const InviteePoll = ({ event, toggleSelection, poll, handlePollConfirmation, eventID, isHost }) => {

    let eventWhat = createPollSelections(event, toggleSelection, poll, 'eventWhat', EventWhatSection);

    let eventWhere = createPollSelections(event, toggleSelection, poll, 'eventWhere', EventWhereSection);

    let eventWhen = createPollSelections(event, toggleSelection, poll, 'eventWhen', EventWhenSection);

    return (
        <div>
            <div>This is poll page</div>

            <h3>{event.eventName}</h3>
            <h3>{event.eventDescription}</h3>

            <h4>EventWhat</h4>
            <div className="ui massive labels">
                { eventWhat }
            </div>

            <h4>EventWhere</h4>
            <div className="ui massive labels">
                { eventWhere }
            </div>

            <h4>EventWhen</h4>
            <div className="ui massive labels">
                { eventWhen }
            </div>

            <PollButton poll={ poll }
                        handlePollConfirmation={ handlePollConfirmation }
                        eventID={ eventID }/>
        </div>
    );
};

function createPollSelections (event, toggleSelection, poll, eventType, EventTypeComponent) {

    return event[eventType].map((choice, i) => {

        let options = {
            "blue": poll[eventType] && poll[eventType][i] === true,

        };

        let classes = classnames("ui", "label", options);

        if (poll[eventType]) {

            return (
                <div onClick={ () => toggleSelection(eventType, i) } className={ classes } key={eventType + '-' + i}>
                    <EventTypeComponent text={ choice } />
                </div>
            );
        } else {

            return (
                <div key={eventType + '-' + i}>
                    <EventTypeComponent text={ choice } />
                </div>
            );
        }
    });
}


export default InviteePoll;
