import React from 'react';
import Transaction from '../../components/Transaction';
import { shallow } from 'enzyme';
import transactions from '../fixtures/transactions';

let wrapper, removeHandler;

beforeEach(() => {
   removeHandler = jest.fn();
   wrapper = shallow(<Transaction transaction={transactions[0]} rate={4.46} />);
});

describe('COMPONENT - Transaction', () => {
   test('Should render Transaction correctly', () => {
      wrapper.setProps({ removeHandler: removeHandler });
      expect(wrapper).toMatchSnapshot();
   });

   test('Should render Transaction without the remove button', () => {
      expect(wrapper).toMatchSnapshot();
   });

   test('Should handle removeTransaction', () => {
      wrapper.setProps({ removeHandler: removeHandler });
      wrapper.find('button').simulate('click');
      expect(removeHandler).toHaveBeenCalled();
   });
});
