import { uploadPhoto } from '../actions/photos.js';
import { store } from '../init-store.js';

export function listenForS3URL (store) {

    let unsubscribe = store.subscribe(listener);

    function listener () {

        let status = getS3URLStatus(store.getState());

        if (status) {

            unsubscribe();
            const file = getPhotoFromStore(store.getState());
            const url = getURLFromStore(store.getState());
            store.dispatch(uploadPhoto(url, file));
        }
    }

    function getURLFromStore (state) {
        return state.photos.signedURL;
    }

    function getPhotoFromStore (state) {
        return state.photos.file;
    }

    function getS3URLStatus (state) {
        return state.photos.signedURL;
    }
}
