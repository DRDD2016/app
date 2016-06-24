import getUserID from './getUserID.js';

export default function filterNotifications (notifications, calendarIsFiltered, isHosting) {

    let currentUserID = getUserID();

    if (!calendarIsFiltered) {
        return notifications;
    } else {

        let condition = isHosting;

        return notifications.filter((notification) => {
            
            let hostID = notification.hostID;
            return isHosting ? (hostID === currentUserID) : (hostID !== currentUserID);
        });
    }
}
