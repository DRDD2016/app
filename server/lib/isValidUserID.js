function isValidUserID (userID) {

    return /\d+/.test(userID);
}

module.exports = isValidUserID;
