var deleteIndividualRSVP = require('../db/deleteIndividualRSVP.js');

function deleteRSVPs (eventID, callback) {

    var statuses = [going, notGoing, maybe];
    var progressCount = 0;

    function report (error, success) {

        if (error) {
            return callback(error);
        }
        progressCount++;

        if (progressCount === statuses.length) {
            return callback(null, true);
        }
    }

    statuses.forEach((status, index) => {

        deleteIndividualRSVP(eventID, status, report);
    });
}

module.exports = deleteRSVPs;
