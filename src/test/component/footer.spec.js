import React from 'react';
import Footer from '../../components/footer';
import {render} from '@testing-library/react';
import * as axe from 'axe-core';
import "babel-polyfill"


describe('Footer Component', () => {

afterAll(async (done)  => {
  done();
});


test.only('Accessibility check', done => {
 const {container} = render(<Footer/>);
 axe.run(container).then(results => {
  expect(results.violations.length).toBe(0);
  done();
 });
});

});
