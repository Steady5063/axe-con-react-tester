import React from 'react';
import CartItem from '../../components/cartItem';
import {render} from '@testing-library/react';
import * as axe from 'axe-core';
const reportViolations = require("../utils/axe-logger");
const reportPath = process.cwd()+ "/src/test/a11y-reports/component/cart-a11y.log";
import "babel-polyfill"


describe('Cart Item Component', () => {


test('Accessibility check', async() => {
    const {container} = render(<CartItem saberName="Windu Saber"/>);
    const results = await axe.run(container)
    reportViolations(results, reportPath);
    expect(results.violations.length).toBe(0);
 });

});


