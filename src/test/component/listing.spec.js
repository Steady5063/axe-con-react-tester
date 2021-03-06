import React from 'react';
import Listing from '../../components/listing';
import {render,screen} from '@testing-library/react';
import * as axe from 'axe-core';
import '@testing-library/jest-dom/extend-expect'
const reportViolations = require("../utils/axe-logger");
const reportPath = process.cwd()+ "/src/test/a11y-reports/component/listing-a11y.log";
import "babel-polyfill"


describe('Listing Component', () => {

  beforeAll(() => {
    render(
      <Listing
        saberName="Windu Saber"
        saberDetails="Here is some data for this string that says what the details are on this thing"
        imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp9YhBNQ4XN66hz6MWTvvimIAiK6Dr2BEsjA3raLs7f7u7XoPEZbm8AoqQgw&usqp=CAc"
      />
    );
  })
 
  test("Listing Details Check", () => {
    expect(screen.getByTestId("saberName")).not.toEqual(null);
    expect(screen.getByTestId("saberName")).toHaveTextContent("Windu Saber");
  });

  test("Accessibility check", (done) => {
    const { container } = render(
      <Listing
        saberName="Windu Saber"
        saberDetails="Here is some data for this string that says what the details are on this thing"
        imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp9YhBNQ4XN66hz6MWTvvimIAiK6Dr2BEsjA3raLs7f7u7XoPEZbm8AoqQgw&usqp=CAc"
      />
    );
    axe.run(container).then((results) => {
      reportViolations(results, reportPath);
      expect(results.violations.length).toBe(0);
      done();
    });
  });

});
