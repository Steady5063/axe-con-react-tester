import React from 'react';
import DataInput from '../../components/dataInput';
import {render} from '@testing-library/react';
import * as axe from 'axe-core';
import "babel-polyfill"


describe('Data Input Component', () => {

afterAll(async (done)  => {
  done();
});


test('Accessibility check', done => {
 const {container} = render(<DataInput inputLabel="First Name"/>);
 axe.run(container).then(results => {
  expect(results.violations.length).toBe(0);
  done();
 });
});

});
