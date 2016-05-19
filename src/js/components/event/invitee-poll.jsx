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


            { eventWhat }
            <hr/>

            { eventWhere }
            <hr/>

            { eventWhen }
            <hr/>

            <PollButton poll={ poll }
                        handlePollConfirmation={ handlePollConfirmation }
                        eventID={ eventID }/>
        </div>
    );
};

function createPollSelections (event, toggleSelection, poll, eventType, EventTypeComponent) {

    return event[eventType].map((choice, i) => {

        let options = {
            "poll-eventWhat": eventType === "eventWhat" && poll[eventType],
            "poll-eventWhere": eventType === "eventWhere" && poll[eventType],
            "poll-eventWhen": eventType === "eventWhen" && poll[eventType],
            "poll-selected-eventWhat": eventType === "eventWhat" && poll[eventType] && poll[eventType][i] === true,
            "poll-selected-eventWhere": eventType === "eventWhere" && poll[eventType] && poll[eventType][i] === true,
            "poll-selected-eventWhen": eventType === "eventWhen" && poll[eventType] && poll[eventType][i] === true
        };

        let classes = classnames("poll-option", options);

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
