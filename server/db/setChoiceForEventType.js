var client = require('./init.js');

function setChoiceForEventType (eventID, eventType, choiceIndex, callback) {

    client.hgetAsync(eventID, eventType)
        .then((eventTypeChoices) => {
            return JSON.parse(eventTypeChoices);
        })
        .then((parsedChoices) => {
            return parsedChoices.slice(choiceIndex, choiceIndex + 1);
        })
        .then((finalChoice) => {
            return JSON.stringify(finalChoice);
        })
        .then((stringifiedChoice) => {
            client.hsetAsync(eventID, eventType, stringifiedChoice)
                .then((success) => {
                    callback(null, success);
                })
                .catch((error) => {
                    callback(error);
                });
        })
        .catch((error) => {

            callback(error);
        });
}

module.exports = setChoiceForEventType;
