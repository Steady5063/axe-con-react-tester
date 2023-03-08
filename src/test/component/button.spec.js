import React from 'react';
import SaberButton from '../../components/button';
import {render} from '@testing-library/react';
import * as axe from 'axe-core';
const reportViolations = require("../utils/axe-logger");
const reportPath = process.cwd()+ "/src/test/a11y-reports/component/button-a11y.log";
import "babel-polyfill"


describe('Button Component', () => {

//This is a bad test for demonstration
test("Functionality - Button Type", () => {
  expect(true).toBe(true);
});
/**
 * @jest-environment jsdom
 */
test('Accessibility check', async () => {
 const {container} = render(<SaberButton buttonType="primary" buttonText="Click me" ></SaberButton>);
 const results = await axe.run(container)
 reportViolations(results, reportPath);
 expect(results.violations.length).toBe(0);
 });

});
