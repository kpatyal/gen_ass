import React from 'react';
import { shallow } from 'enzyme';
import LocationSelector from './LocationSelector';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';


it('Check add and clear button exits', () => {
  const wrapper = shallow(<LocationSelector />);
  expect(wrapper.find('.add-button').exists()).toEqual(true);
  expect(wrapper.find('.clear-button').exists()).toEqual(true);
});