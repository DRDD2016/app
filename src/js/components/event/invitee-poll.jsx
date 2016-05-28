import React from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';
import PollButton from '../general/poll-button.jsx';
import { EventWhatSection, EventWhereSection, EventWhenSection } from './invitee-poll-sections.jsx';

const InviteePoll = ({ event, toggleSelection, poll, handlePollConfirmation, eventID, isHost }) => {

    let eventWhat = createPollSelections(event, toggleSelection, poll, 'eventWhat', EventWhatSection);
    let eventWhere = createPollSelections(event, toggleSelection, poll, 'eventWhere', EventWhereSection);
    let eventWhen = createPollSelections(event, toggleSelection, poll, 'eventWhen', EventWhenSection);

    function eventNote (event) {

        if (event.eventNote !== "") {
            return (
                <div>
                <h4 className="twelve columns">Note</h4>
                { event.eventNote }
                </div>
            );
        }
    }

    return (
            <div>
                { eventNote(event) }

                <h4>What</h4>
                { eventWhat }

                <h4>Where</h4>
                { eventWhere }

                <h4>When</h4>
                { eventWhen }

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
