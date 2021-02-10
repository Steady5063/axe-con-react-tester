import React from 'react';
import Header from '../../components/header';
import {render} from '@testing-library/react';
import * as axe from 'axe-core';
import "babel-polyfill"


describe('Header Component', () => {

afterAll(async (done)  => {
  done();
});


test('Accessibility check', done => {
 const {container} = render(<Header/>);
 axe.run(container).then(results => {
  expect(results.violations.length).toBe(0);
  done();
 });
});

});
