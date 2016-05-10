import test from 'tape';
import nock from 'nock';

/*
Nock works by pretending to do a request for you.  Doesn't talk to your real browser or anything like that'
You can control what goes in your response
Useful for testing things that ordinarily would make a request of some sort
*/

const TEST_URL = 'http://localhost:8080';

test.skip('Home endpoint works', (t) => {

    nock(TEST_URL)
    .get('/')
    .reply('200', 'index endpoint works');

    t.end();
});
