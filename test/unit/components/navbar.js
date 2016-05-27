import test from 'tape';
import React from 'react';
import { renderIntoDocument, scryRenderedDOMComponentsWithClass, Simulate } from 'react-addons-test-utils';
import shallowRenderer from '../../utils/shallowRenderer.js';
import Navbar from '../../../src/js/components/general/navbar.jsx';


test('Navbar shallow renders correctly', (t) => {

    const shallow = shallowRenderer(<Navbar />);
    t.equal(shallow.props.children.length, 5, 'Navbar has 5 children');
    t.end();
});


test.skip('Navbar renders onto DOM correctly', (t) => {

    const rendered = renderIntoDocument(<Navbar />);
    const buttons = scryRenderedDOMComponentsWithClass('nav-button');
    // console.log(buttons);
    t.end();
});
