import { savePhotoURL } from '../actions/photos.js';
import { store } from '../init-store.js';

export function listenForSavePhotoURL (store) {

    let unsubscribe = store.subscribe(listener);


    function listener () {

        let status = getPhotoURLStatus(store.getState());

        if (status) {

            unsubscribe();
            console.log("Send URL to Server");
            const eventID = getEventIDFromStore(store.getState());
            const photoURL = getPhotoURLFromStore(store.getState());
            store.dispatch(savePhotoURL(url, eventID));
        }
    }

    function getPhotoURLFromStore (state) {
        return state.photos.photoURL;
    }

    function getEventIDFromStore (state) {
        return state.event.data.eventID;
    }

    function getPhotoURLStatus (state) {
        return state.photos.photoURL;
    }
}
