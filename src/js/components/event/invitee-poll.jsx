import React from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';
import PollButton from '../general/poll-button.jsx';
import { EventWhatSection, EventWhereSection, EventWhenSection } from './poll-sections.jsx';

const InviteePoll = ({ event, toggleSelection, poll, handlePollConfirmation, eventID, isHost, hasVoted }) => {

    let eventWhat = createPollSelections(event, toggleSelection, poll, 'eventWhat', EventWhatSection);
    let eventWhere = createPollSelections(event, toggleSelection, poll, 'eventWhere', EventWhereSection);
    let eventWhen = createPollSelections(event, toggleSelection, poll, 'eventWhen', EventWhenSection);

    let voteButtonText = hasVoted ? "VOTE AGAIN" : "VOTE";

    function eventNote (event) {

        if (event.eventNote !== "") {
            return (
                <div className="event-note">
                    { event.eventNote }
                    <hr />
                </div>
            );
        }
    }

    return (
            <div className="poll">
                { eventNote(event) }

                <div className="eventWhat">
                    { eventWhat }
                </div>
                <div className="eventWhere">
                    { eventWhere }
                </div>
                <div className="eventWhen">
                    { eventWhen}
                </div>

                <PollButton poll={ poll }
                            handlePollConfirmation={ handlePollConfirmation }
                            eventID={ eventID }
                            voteButtonText={ voteButtonText }/>

            </div>
    );
};


function createPollSelections (event, toggleSelection, poll, eventType, EventTypeComponent) {


    return event[eventType].map((choice, i) => {

        let classes = classnames("poll-option", "eight columns offset-by-one", {
            "selected": poll[eventType] === undefined || poll[eventType][i] === true
        });
        let labelClasses = classnames("two columns section-title", {
            'hide': i > 0
        });

        if (poll[eventType]) {

            return (
                <div onClick={ () => toggleSelection(eventType, i) }
                     key={eventType + '-' + i}>

                    <EventTypeComponent text={ choice }
                                        choiceClasses={ classes }
                                        labelClasses={ labelClasses }/>
                </div>
            );
        } else {

            return (
                <div key={eventType + '-' + i}>
                    <EventTypeComponent text={ choice }
                                        choiceClasses={ classes }
                                        labelClasses={ labelClasses }/>
                </div>
            );
        }
    });
}


export default InviteePoll;
