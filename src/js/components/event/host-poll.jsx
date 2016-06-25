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
                <div>
                <h4 className="twelve columns">Note</h4>
                { event.eventNote }
                </div>
            );
        }
    }

    return (
            <div className="poll">
                { eventNote(event) }

                <h4>What</h4>
                { eventWhat }

                <h4>Where</h4>
                { eventWhere }

                <h4>When</h4>
                { eventWhen }

                <HostCreateEventButton hostEventChoices={ hostEventChoices }
                    handleConfirmEvent={ handleConfirmEvent }
                    eventID={ eventID } />

            </div>
    );
};

function createVoteSection (event, tally, eventType, EventTypeComponent, handleHostEventChoices, hostEventChoices) {
    return event[eventType].map((choice, i) => {
        let options = {
            "poll-eventWhat": eventType === "eventWhat" && tally[eventType],
            "poll-eventWhere": eventType === "eventWhere" && tally[eventType],
            "poll-eventWhen": eventType === "eventWhen" && tally[eventType],
            "selected": hostEventChoices[eventType] === i
        };

        let classes = classnames("poll-option nine columns", options);

        var tallyCount = tally[eventType] ? tally[eventType][i] : '';

        if (tally[eventType]) {

            return (
                <div onClick={ () => handleHostEventChoices(eventType, choice, i) }
                     className={ "" + eventType }
                     key={ eventType + '-' + i } >
                    <EventTypeComponent text={ choice } tally={ tallyCount } classOptions={ classes } />
                </div>
            );
        } else {

            return (
                <div key={ eventType + '-' + i }>
                    <EventTypeComponent
                        text={ choice }
                        tally={ tallyCount }
                        classOptions={ classes } />
                </div>
            );
        }
    });
}



export default HostPoll;
