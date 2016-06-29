import React from 'react';
import classnames from 'classnames';
import { EventWhatSection, EventWhereSection, EventWhenSection } from './poll-sections.jsx';
import HostCreateEventButton from './host-create-event-button.jsx';


const HostPoll = ({ event, tally, hostEventChoices, handleHostEventChoices, handleConfirmEvent, eventID  }) => {

    let eventWhat = createVoteSection(event, tally, 'eventWhat', EventWhatSection, handleHostEventChoices, hostEventChoices);
    let eventWhere = createVoteSection(event, tally, 'eventWhere', EventWhereSection, handleHostEventChoices, hostEventChoices);
    let eventWhen = createVoteSection(event, tally, 'eventWhen', EventWhenSection, handleHostEventChoices, hostEventChoices);

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
                { eventWhen }
            </div>

            <HostCreateEventButton hostEventChoices={ hostEventChoices }
                handleConfirmEvent={ handleConfirmEvent }
                eventID={ eventID } />

        </div>
    );
};

function createVoteSection (event, tally, eventType, EventTypeComponent, handleHostEventChoices, hostEventChoices) {


    return event[eventType].map((choice, i) => {

        let classes = classnames("poll-option eight columns", {
            "selected": hostEventChoices[eventType] === i || hostEventChoices[eventType] === undefined
        });
        let labelClasses = classnames("two columns section-title", {
            'hide': i > 0
        });
        let tallyCount = tally[eventType] ? tally[eventType][i] : '';

        if (tally[eventType]) {

            return (
                <div onClick={ () => handleHostEventChoices(eventType, choice, i) }
                     key={ eventType + '-' + i } >
                    <EventTypeComponent text={ choice }
                                        tally={ tallyCount }
                                        choiceClasses={ classes }
                                        labelClasses={ labelClasses } />
                </div>
            );
        } else {

            return (
                <div key={ eventType + '-' + i }>
                    <EventTypeComponent
                        text={ choice }
                        tally={ tallyCount }
                        choiceClasses={ classes }
                        labelClasses={ labelClasses } />
                </div>
            );
        }
    });
}



export default HostPoll;
