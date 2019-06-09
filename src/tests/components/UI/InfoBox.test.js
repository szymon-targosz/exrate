import React from 'react';
import { shallow } from 'enzyme';
import InfoBox from '../../../components/UI/InfoBox';

let wrapper;

beforeEach(() => {
   wrapper = shallow(<InfoBox description="Some description" data="19932.31" />);
});

describe('COMPONENT - InfoBox', () => {
   test('Should render InfoBox correctly', () => {
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
