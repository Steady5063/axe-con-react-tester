import React from 'react';
import SaberButton from '../../components/button';
import {render} from '@testing-library/react';
import * as axe from 'axe-core';
import "babel-polyfill"


describe('Button Component', () => {

afterAll(async (done)  => {
  done();
});


test('Accessibility check', (done) => {
 const {container} = render(<SaberButton buttonType="primary" buttonText="Click me" ></SaberButton>);
 axe.run(container).then(results => {
    expect(results.violations.length).toBe(0);
    done();
 });

 });

});
