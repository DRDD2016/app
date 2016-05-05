export default function getUserID () {

    return document.cookie.match(/sparkID=\d+/)[0];
}
