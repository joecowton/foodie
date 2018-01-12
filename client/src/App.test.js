import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
require('./setupTest.js');

chai.use(chaiEnzyme());

import App from './App';
import Product from './Product/Product'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it ('can use Sinon syntax', () => {
  expect(true).to.equal(true);
});

it ('has a module', () => {
  const mountWrapper = mount(<App />)
  expect(mountWrapper.length).to.equal(1)
})
