export default function validCookieExists () {

    return document.cookie.indexOf("sparkID") !== -1;
}
