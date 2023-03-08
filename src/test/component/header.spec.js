import React from 'react';
import Header from '../../components/header';
import {render} from '@testing-library/react';
import * as axe from 'axe-core';
const reportViolations = require("../utils/axe-logger");
const reportPath = process.cwd()+ "/src/test/a11y-reports/component/header-a11y.log";
import "babel-polyfill"


describe('Header Component', () => {


test('Accessibility check', async ()=> {
 const {container} = render(<Header/>);
 const results = await axe.run(container)
 reportViolations(results, reportPath);
 expect(results.violations.length).toBe(0);
});

});
