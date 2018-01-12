import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { mount } from 'enzyme';
require('../../../setupTest.js');

import SearchFilter from './SearchFilter';

describe('<SearchFilter />', () => {
  it('should have class name SearchFilter', () => {
    const wrapper = mount(<SearchFilter className='SearchFilter'/>);
    expect(wrapper.is('.SearchFilter')).to.equal(true);
  })
})
