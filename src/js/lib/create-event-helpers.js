export function isPoll (data) {

    return !!data.eventWhat[1] || !!data.eventWhere[1] || !!data.eventWhen[1];
}

export function cleanEventData (event) {

    event.eventWhat = event.eventWhat.filter((item, _, array) => {

        if (array.length === 1) {
            return true;
        } else if (array.length > 1) {
            return item !== "";
        }
    });
    event.eventWhere = event.eventWhere.filter((item, _, array) => {
        
        if (array.length === 1) {
            return true;
        } else if (array.length > 1) {
            return item.placeName !== "";
        }
    });

    event.eventWhen = event.eventWhen.filter((item, _, array) => {

        if (array.length === 1) {
            return true;
        } else if (array.length > 1) {
            return item.date !== "";
        }
    });
    return event;
}
