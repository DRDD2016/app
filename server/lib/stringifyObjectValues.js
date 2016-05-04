function stringifyObjectValues (object) {

    var newObject = {};

    for (var value in object) {
        if (typeof object[value] === 'object') {
            newObject[value] = JSON.stringify(object[value]);
        } else {
            newObject[value] = object[value];
        }
    }
    return newObject;
}

module.exports = stringifyObjectValues;
