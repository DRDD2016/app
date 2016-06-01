export function isPoll (data) {

    return !!data.eventWhat[1] || !!data.eventWhere[1] || !!data.eventWhen[1];
}

export function cleanEventData (event) {

    event.eventWhat = event.eventWhat.filter((item, _, array) => {

        return array.length > 1 && item !== "";
    });
    event.eventWhere = event.eventWhere.filter((item, _, array) => {
    
        return array.length > 1 && item !== "";
    });

    event.eventWhen = event.eventWhen.filter((dateTimeObject, _, array) => {

        return dateTimeObject.date !== "";
    });
    return event;
}
