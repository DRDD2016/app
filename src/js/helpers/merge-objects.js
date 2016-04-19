
function mergeProperties(propertyKey, firstObject, secondObject) {
    var propertyValue = firstObject[propertyKey];

    if (typeof(propertyValue) === "object") {
        return mergeObjects(firstObject[propertyKey], secondObject[propertyKey]);
    } else if (secondObject[propertyKey] === undefined) {
        return firstObject[propertyKey];
    }

    return secondObject[propertyKey];
}

function mergeObjects(firstObject, secondObject) {
    var finalObject = {};

    // Merge first object and its properties.
    for (var propertyKey in firstObject) {
        finalObject[propertyKey] = mergeProperties(propertyKey, firstObject, secondObject);
    }

    // Merge second object and its properties.
    for (var propertyKey in secondObject) {
        finalObject[propertyKey] = mergeProperties(propertyKey, secondObject, firstObject);
    }

    return finalObject;
}

export default mergeObjects;
