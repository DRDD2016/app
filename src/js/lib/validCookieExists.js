export default function validCookieExists () {
    console.log("valid cookie?");
    return document.cookie.indexOf("sparkID") === -1;
}
