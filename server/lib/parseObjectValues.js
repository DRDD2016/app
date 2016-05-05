function parseObjectValues (oldObject) {

    var targetValues = ['invitees', 'eventWhat', 'eventWhere', 'eventWhen', 'isPoll', 'hostID'];

    return Object.keys(oldObject).reduce((newObject, key, i) => {

        if (targetValues.indexOf(key) > -1) {

            newObject[key] = JSON.parse(oldObject[key]);
        } else {

            newObject[key] = oldObject[key];
        }
        return newObject;
    }, {});
}

module.exports = parseObjectValues;
