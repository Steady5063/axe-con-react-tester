import React from 'react';
import CartItem from '../../components/cartItem';
import {render} from '@testing-library/react';
import * as axe from 'axe-core';
import "babel-polyfill"


describe('Cart Item Component', () => {

afterAll(async (done)  => {
  done();
});


test('Accessibility check', done => {
 const {container, baseElement} = render(<CartItem saberName="Windu Saber"/>);
 axe.run(container).then(results => {
    expect(results.violations.length).toBe(0);
    done();
  });
       
 });

});


