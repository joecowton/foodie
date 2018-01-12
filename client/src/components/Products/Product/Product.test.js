import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { mount } from 'enzyme';
require('../../../setupTest.js');

import Product from './Product';

describe('<Product />', () => {
  it('allows us to set props', () => {
    const wrapper = mount(<Product name='Pancakes' />);
    expect(wrapper.props().name).to.equal('Pancakes');
    wrapper.setProps({ name: 'Pancakes' });
    expect(wrapper.props().name).to.equal('Pancakes');
  });

});
