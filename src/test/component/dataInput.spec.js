import React from 'react';
import DataInput from '../../components/dataInput';
import {render} from '@testing-library/react';
import * as axe from 'axe-core';
const reportViolations = require("../utils/axe-logger");
const reportPath = process.cwd()+ "/src/test/a11y-reports/component/dataInput-a11y.log";
import "babel-polyfill"


describe('Data Input Component', () => {

//This is a bad test for demonstration
test("Functionality - Data Input", () => {
  expect(true).toBe(true);
});

test("Accessibility check", async () => {
  const { container } = render(<DataInput inputLabel="First Name" />);
  const results = await axe.run(container)
  reportViolations(results, reportPath);
  expect(results.violations.length).toBe(0);
});

});
