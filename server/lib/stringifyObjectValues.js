function stringifyObjectValues (object) {

    for (var value in object) {

        if (typeof object[value] === 'object') {
            object[value] = JSON.stringify(object[value]);
        }
    }
    return object;
}

module.exports = stringifyObjectValues;
