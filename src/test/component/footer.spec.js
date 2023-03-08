import React from 'react';
import Footer from '../../components/footer';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import * as axe from 'axe-core';
const reportViolations = require("../utils/axe-logger");
const reportPath = process.cwd()+ "/src/test/a11y-reports/component/footer-a11y.log";
import "babel-polyfill"


describe('Footer Component', () => {

  test("Funtionality - Component has loaded", () => {
    render(<Footer />);
    expect(screen.getByRole("heading")).toHaveTextContent("Contact Us");
  });

  test("Functionality - List number", () => {
    render(<Footer />);
    expect(screen.getByTestId("footList")).not.toEqual(null);
    expect(screen.getByTestId("footList").childElementCount).toBe(5);
  });


  test("Accessibility check",async () => {
   const {container} = render(<Footer />);
   const results = await axe.run(container)
   reportViolations(results, reportPath);
   expect(results.violations.length).toBe(0);
  });

});
