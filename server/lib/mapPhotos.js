var setChoiceForEventType = require('../db/setChoiceForEventType.js');

function setHostEventChoices (eventID, choices, callback) {

    var eventTypes = Object.keys(choices);
    var progressCount = 0;

    function report (error, success) {

        if (error) {
            callback(error);
        }
        progressCount++;

        if (progressCount === eventTypes.length) {

            callback(null, true);
        }
    }

    eventTypes.forEach((eventType, i) => {

        setChoiceForEventType(eventID, eventType, choices[eventType], report);
    });
}



module.exports = setHostEventChoices;
