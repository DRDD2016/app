import test from 'tape';
import { SET_PHOTO, setPhoto } from '../../../src/js/actions/photos.js';
import { GET_S3_URL, GET_S3_URL_REQUEST, GET_S3_URL_SUCCESS, GET_S3_URL_FAILURE } from '../../../src/js/actions/photos.js';
import { getS3URL, getS3URLRequest, getS3URLSuccess, getS3URLFailure } from '../../../src/js/actions/photos.js';
import { UPLOAD_PHOTO, UPLOAD_PHOTO_REQUEST, UPLOAD_PHOTO_SUCCESS, UPLOAD_PHOTO_FAILURE } from '../../../src/js/actions/photos.js';
import { uploadPhoto, uploadPhotoRequest, uploadPhotoSuccess, uploadPhotoFailure } from '../../../src/js/actions/photos.js';
import { SAVE_PHOTO_URL, SAVE_PHOTO_URL_REQUEST, SAVE_PHOTO_URL_SUCCESS, SAVE_PHOTO_URL_FAILURE } from '../../../src/js/actions/photos.js';
import { savePhotoURL, savePhotoURLRequest, savePhotoURLSuccess, savePhotoURLFailure } from '../../../src/js/actions/photos.js';
import createThunk from '../../utils/mock-thunk.js';


/********
SET PHOTO ACTIONS
********/

test('setPhoto action creator returns expected action', (t) => {

    const data = {
        filename: "photo.jpg"
    };
    const expected = {
        type: SET_PHOTO,
        data
    };
    const actual = setPhoto(data);

    t.deepEqual(actual, expected, 'setPhoto returns the SET_PHOTO action');
    t.end();
});



/********
GET S3 SIGNED URL ACTIONS
********/

test('getS3URL async action creator returns expected action', (t) => {
    let actual;
    const { dispatch, queue } = createThunk();
    var filename = 'sohil.jpg';
    var filetype = 'jpg';
    var eventID = 'event:100';
    dispatch(getS3URL(filename, filetype, eventID));

    [{ ...actual }] = queue;

    const expected = {
        type: GET_S3_URL_REQUEST,
        isFetching: true
    };
    t.deepEqual(actual, expected, "getS3URL returns the GET_S3_URL_REQUEST action");
    t.end();
});


test('getS3URLRequest action creator returns expected action', (t) => {
    const expected = {
        type: GET_S3_URL_REQUEST,
        isFetching: true,
    };
    const actual = getS3URLRequest();

    t.deepEqual(actual, expected);
    t.end();
});

test('getS3URLSuccess action creator returns expected action', (t) => {

    var url = "http://url.com";
    const expected = {
        type: GET_S3_URL_SUCCESS,
        isFetching: false,
        signedURL: url
    };

    const actual = getS3URLSuccess(url);

    t.deepEqual(actual, expected);
    t.end();
});

test('getS3URLFailure action creator returns expected action', (t) => {

    const error = {
        message: "Whoops"
    };
    const expected = {
        type: GET_S3_URL_FAILURE,
        isFetching: false,
        error
    };

    const actual = getS3URLFailure(error);

    t.deepEqual(actual, expected);
    t.end();
});


/********
UPLOAD PHOTO ACTIONS
********/

test('uploadPhoto async action creator returns expected action', (t) => {
    let actual;
    const { dispatch, queue } = createThunk();
    var eventID = 'event:100';
    var photo = 'Photo.jpg';
    dispatch(uploadPhoto(photo, eventID));

    [{ ...actual }] = queue;

    const expected = {
        type: UPLOAD_PHOTO_REQUEST,
        isFetching: true
    };
    t.deepEqual(actual, expected, "uploadPhoto returns the UPLOAD_PHOTO_REQUEST action");
    t.end();
});


test('uploadPhotoRequest action creator returns expected action', (t) => {

    const expected = {
        type: UPLOAD_PHOTO_REQUEST,
        isFetching: true
    };
    const actual = uploadPhotoRequest();

    t.deepEqual(actual, expected);
    t.end();
});

test('uploadPhotoSuccess action creator returns expected action', (t) => {

    var url = "https://url.com";
    const expected = {
        type: UPLOAD_PHOTO_SUCCESS,
        isFetching: false,
        data: url
    };

    const actual = uploadPhotoSuccess(url);

    t.deepEqual(actual, expected);
    t.end();
});

test('uploadPhotoFailure action creator returns expected action', (t) => {

    const error = {
        message: "Whoops"
    };
    const expected = {
        type: UPLOAD_PHOTO_FAILURE,
        isFetching: false,
        error
    };

    const actual = uploadPhotoFailure(error);

    t.deepEqual(actual, expected);
    t.end();
});


/********
SAVE PHOTO URL ACTIONS
********/

test('savePhotoURL async action creator returns expected action', (t) => {
    let actual;
    const { dispatch, queue } = createThunk();
    var url = 'http://www.aws.com/photolocation.jpg';
    var eventID = 'event:100';
    dispatch(savePhotoURL(url, eventID));

    [{ ...actual }] = queue;

    const expected = {
        type: SAVE_PHOTO_URL_REQUEST,
        isFetching: true
    };
    t.deepEqual(actual, expected, "savePhotoURL returns the SAVE_PHOTO_URL_REQUEST action");
    t.end();
});


test('savePhotoURLRequest action creator returns expected action', (t) => {

    const expected = {
        type: SAVE_PHOTO_URL_REQUEST,
        isFetching: true
    };
    const actual = savePhotoURLRequest();

    t.deepEqual(actual, expected);
    t.end();
});

test('savePhotoURLSuccess action creator returns expected action', (t) => {

    var url = "https://url.com";
    const expected = {
        type: SAVE_PHOTO_URL_SUCCESS,
        isFetching: false
    };

    const actual = savePhotoURLSuccess();

    t.deepEqual(actual, expected);
    t.end();
});

test('savePhotoURLFailure action creator returns expected action', (t) => {

    const error = {
        message: "Whoops"
    };
    const expected = {
        type: SAVE_PHOTO_URL_FAILURE,
        isFetching: false,
        error
    };

    const actual = savePhotoURLFailure(error);

    t.deepEqual(actual, expected);
    t.end();
});
