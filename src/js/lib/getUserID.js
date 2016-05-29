export default function getUserID () {

    if (!document.cookie.match(/sparkID=\d+/)) {

        console.error('User session cookie not found.');
        return false;
    }
    const result = document.cookie.match(/sparkID=\d+/)[0].match(/\d+/);

    return result[0];
}
