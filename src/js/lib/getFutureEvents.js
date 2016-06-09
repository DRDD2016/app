import getEndTime from './getEndTime.js';

export default function getFutureEvents (event) {

    if (event.eventWhen[0].date === "") {
        return false;
    } else {
        const end = getEndTime(event.eventWhen[0].date);
        return !isNaN(end) && Date.now() < end;
    }
}
