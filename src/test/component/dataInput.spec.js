import React from 'react';
import DataInput from '../../components/dataInput';
import {render} from '@testing-library/react';
import * as axe from 'axe-core';
const reportViolations = require("../utils/axe-logger");
const reportPath = process.cwd()+ "/src/test/a11y-reports/component/dataInput-a11y.log";
import "babel-polyfill"


describe('Data Input Component', () => {

test("Accessibility check", (done) => {
  const { container } = render(<DataInput inputLabel="First Name" />);
  axe.run(container).then((results) => {
    reportViolations(results, reportPath);
    expect(results.violations.length).toBe(0);
    done();
  });
});

});
