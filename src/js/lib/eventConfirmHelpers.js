export function isPoll (data) {

    return !!data.eventWhat[1] || !!data.eventWhere[1] || !!data.eventWhen[1];
}

export function cleanEventData (event) {

    event.eventWhat = event.eventWhat.filter((item) => {

        return item !== "";
    });
    event.eventWhere = event.eventWhere.filter((item) => {

        return item !== "";
    });
    event.eventWhen = event.eventWhen.filter((dateTimeObject) => {

        return dateTimeObject.date !== "";
    });
    return event;
}
