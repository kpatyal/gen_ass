import React from 'react';
import { shallow } from 'enzyme';
import LocationList from './LocationList';
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'

chai.should()
chai.use(chaiAsPromised)

const props = {
		locations: [
		{'selectedCountry': 'a', 'selectedState': 'b', 'selectedCity': 'c', 'areas': ['a','b']},
		{'selectedCountry': 'a', 'selectedState': 'b', 'selectedCity': 'c', 'areas': ['a','b']},
		{'selectedCountry': 'a', 'selectedState': 'b', 'selectedCity': 'c', 'areas': ['a','b']},
		{'selectedCountry': 'a', 'selectedState': 'b', 'selectedCity': 'c', 'areas': ['a','b']}
		],
	};
it('Check class for wrapper element', () => {
  const wrapper = shallow(<LocationList />);
  const welcome = <div class="container location-container"></div>;
  expect(wrapper.find('.container').hasClass('location-container')).toEqual(true);

});

it('Test for checking location passed taso props correctly!!', () => {
  const wrapper = shallow(<LocationList locations={props.locations}/>);
  expect(wrapper.props().children.props.data).toEqual(props.locations);
});