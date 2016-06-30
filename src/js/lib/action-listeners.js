import { uploadPhoto } from '../actions/photos.js';
import { getNotifications } from '../actions/notifications.js';
import { store } from '../init-store.js';
import getUserID from './getUserID.js';


export function listenForS3URL (store) {

    let unsubscribe = store.subscribe(listener);

    function listener () {

        let status = store.getState().photos.signedURL;

        if (status) {

            unsubscribe();
            const file = store.getState().photos.file;
            const url = store.getState().photos.signedURL;
            store.dispatch(uploadPhoto(url, file));
        }
    }
}

// export function listenForUserID (store) {
//
//     let unsubscribe = store.subscribe(listener);
//
//     function listener () {
//
//         let userID = store.getState().user.id;
//
//         if (userID) {
//             console.log('I am in listren for user id', userID);
//             unsubscribe();
//             // store.dispatch(getNotifications(userID));
//         }
//     }
// }
