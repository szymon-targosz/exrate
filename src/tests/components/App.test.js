import React from 'react';
import App from '../../App';
import { shallow } from 'enzyme';

describe('COMPONENT - App', () => {
   test('Should render App correctly', () => {
      const wrapper = shallow(<App />);
      expect(wrapper).toMatchSnapshot();
   });
});
