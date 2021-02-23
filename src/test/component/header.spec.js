import React from 'react';
import Header from '../../components/header';
import {render} from '@testing-library/react';
import * as axe from 'axe-core';
const reportViolations = require("../utils/axe-logger");
const reportPath = process.cwd()+ "/src/test/a11y-reports/component/header-a11y.log";
import "babel-polyfill"


describe('Header Component', () => {

afterAll(async (done)  => {
  done();
});


test('Accessibility check', done => {
 const {container} = render(<Header/>);
 axe.run(container).then(results => {
  reportViolations(results, reportPath);
  expect(results.violations.length).toBe(0);
  done();
 });
});

});
