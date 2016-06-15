import test from 'tape';


test('On initial sign in, a socket namespace is created for that user', (t) => {

    // when you sign up, you get a personal namespace for your notifications.
    // that namespace will be connected to a myEvents object in redis

    t.end();
});
