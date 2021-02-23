import React from 'react';
import SaberButton from '../../components/button';
import {render} from '@testing-library/react';
import * as axe from 'axe-core';
const reportViolations = require("../utils/axe-logger");
const reportPath = process.cwd()+ "/src/test/a11y-reports/component/button-a11y.log";
import "babel-polyfill"


describe('Button Component', () => {

afterAll(async (done)  => {
  done();
});


test('Accessibility check', (done) => {
 const {container} = render(<SaberButton buttonType="primary" buttonText="Click me" ></SaberButton>);
 axe.run(container).then(results => {
    reportViolations(results, reportPath);
    expect(results.violations.length).toBe(0);
    done();
 });

 });

});
