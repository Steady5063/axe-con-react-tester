import React from 'react';
import Listing from '../../components/listing';
import {render} from '@testing-library/react';
import * as axe from 'axe-core';
import "babel-polyfill"


describe('Listing Component', () => {

afterAll(async (done)  => {
  done();
});


test('Accessibility check', done => {
 const {container} = render(  <Listing saberName="Windu Saber" 
 saberDetails="Here is some data for this string that says what the details are on this thing" 
 imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp9YhBNQ4XN66hz6MWTvvimIAiK6Dr2BEsjA3raLs7f7u7XoPEZbm8AoqQgw&usqp=CAc" />);

 axe.run(container).then(results => {
  expect(results.violations.length).toBe(0);
  done();
 });
});

});
