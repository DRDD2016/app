export default function getUserID () {

    const result = document.cookie.match(/sparkID=\d+/)[0].match(/\d+/);
    
    if (!result) {
        throw new Error('User session cookie not found.');
    }
    return result[0];
}
