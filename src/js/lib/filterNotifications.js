import getUserID from './getUserID.js';

export default function filterNotifications (notifications, isFilter, isHosting) {

    let currentUserID = getUserID();

    if (!isFilter) {
        return notifications;
    } else {

        let condition = isHosting;

        return notifications.filter((notification) => {
            
            let hostID = notification.hostID;
            return isHosting ? (hostID === currentUserID) : (hostID !== currentUserID);
        });
    }
}
