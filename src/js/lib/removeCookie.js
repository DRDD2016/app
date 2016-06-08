export default function removeCookie () {

    console.log(document.cookie);
    document.cookie = "sparkID=; expires=Thu, 01 Jan 1970 00:00:00 UTC";

}
