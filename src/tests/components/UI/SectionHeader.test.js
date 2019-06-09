import React from 'react';
import { shallow } from 'enzyme';
import SectionHeader from '../../../components/UI/SectionHeader';

let wrapper;

beforeEach(() => {
   wrapper = shallow(<SectionHeader title="Some interesting text" children="CHILDREN HERE" />);
});

describe('COMPONENT - SectionHeader', () => {
   test('Should render SectionHeader correctly', () => {
      expect(wrapper).toMatchSnapshot();
   });

   test('Should add external css classes - array', () => {
      wrapper.setProps({ cssClasses: [ 'bg-secondary', 'border', 'border-info' ] });
      expect(wrapper).toMatchSnapshot();
   });

   test('Should add external css classes - string', () => {
      wrapper.setProps({ cssClasses: 'bg-warning p-s' });
      expect(wrapper).toMatchSnapshot();
   });
});
