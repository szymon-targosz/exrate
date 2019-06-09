import React from 'react';
import { DefineRate } from '../../components/DefineRate';
import { shallow } from 'enzyme';
import Input from '../../components/UI/Input';

let wrapper, setExchangeRate;

beforeEach(() => {
   setExchangeRate = jest.fn();
   wrapper = shallow(<DefineRate setExchangeRate={setExchangeRate} />);
});

describe('COMPONENT - DefineRate', () => {
   test('Should render DefineRate correctly', () => {
      expect(wrapper).toMatchSnapshot();
   });

   test('Should handle input(rate) change', () => {
      const value = '32.1';
      wrapper.find(Input).prop('changeHandler')({ target: { value } });
      expect(wrapper.state('rate')).toBe(value);
      expect(setExchangeRate).toHaveBeenCalledWith(value);
   });
   
   test('Should set rate to 0 if input is an empty string', () => {
      const value = '';
      wrapper.find(Input).prop('changeHandler')({ target: { value } });
      expect(wrapper.state('rate')).toBe(value);
      expect(setExchangeRate).toHaveBeenCalledWith(0);
   });
});
