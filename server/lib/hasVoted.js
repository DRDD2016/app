
var hasVoted = function (pollObject, callback) {

    var votedArray = [];

    var hasVotedBefore = Object.keys(pollObject).forEach((eventType, index) => {
        return pollObject[eventType].filter((vote, i) => {
            if (vote === true) {
                return votedArray.push(vote);
            }
        });
    });

    if (votedArray.length > 0) {
        callback(true);
    } else {
        callback(false);
    }

};

module.exports = hasVoted;
