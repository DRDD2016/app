export function listenForS3URL (store) {

    let unsubscribe = store.subscribe(listener);


    function listener () {

        let status = getS3URLStatus(store.getState());
        console.log(status);
        if (status) {

            console.log("NOW LET'S UPLOAD THE PHOTO!");
            unsubscribe();
        }
    }

    function getS3URLStatus (state) {
        return state.photos.url;
    }
}
