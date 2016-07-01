/****
Takes the photos from an event, filters out the user's deleted photos
****/

function getPersonalPhotos (allPhotos, deletedPhotos, result, callback, index) {

    if (!index) {
        index = 0;
    }

    if (index === allPhotos.length) {
        callback(null, result);
    } else {
        if (deletedPhotos.indexOf(allPhotos[index].photoURL) === -1) {
            result.push(allPhotos[index]);
        }
        getPersonalPhotos(allPhotos, deletedPhotos, result, callback, ++index);
    }
}

module.exports = getPersonalPhotos;
