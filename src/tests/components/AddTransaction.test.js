import React from 'react';
import { AddTransaction } from '../../components/AddTransaction';
import { shallow, mount } from 'enzyme';
import Input from '../../components/UI/Input';
import transactions from '../fixtures/transactions';

let wrapper, addTransaction;

beforeEach(() => {
   addTransaction = jest.fn();
   wrapper = shallow(<AddTransaction addTransaction={addTransaction} transactions={transactions} />);
});

describe('COMPONENT - AddTransaction', () => {
   test('Should render AddTransaction correctly', () => {
      expect(wrapper).toMatchSnapshot();
   });

   test('Should handle name change', () => {
      const value = 'car';
      wrapper.find(Input).first().prop('changeHandler')({ target: { value } });
      expect(wrapper.state('name')).toBe(value);
   });

   test('Should handle amount change', () => {
      const value = '421.01';
      wrapper.find(Input).last().prop('changeHandler')({ target: { value } });
      expect(wrapper.state('amount')).toBe(value);
   });

   test('Should handle submit', () => {
      wrapper = mount(<AddTransaction addTransaction={addTransaction} transactions={transactions} />);

      wrapper.setState({ name: 'laptop', amount: '499.1', error: undefined });
      wrapper.find('form').simulate('submit', { preventDefault: () => {} });
      expect(addTransaction).toHaveBeenCalledWith('laptop', '499.1');
      expect(wrapper.state()).toEqual({ error: undefined, name: '', amount: '' });
      wrapper.unmount();
   });

   test('Should block submit if the name is already taken', () => {
      wrapper.setState({ name: transactions[0].name, amount: '499.1', error: undefined });
      wrapper.find('form').simulate('submit', { preventDefault: () => {} });
      expect(addTransaction).not.toHaveBeenCalled();
      expect(wrapper.state('error')).toBe('Name already taken');
      expect(wrapper).toMatchSnapshot();
   });

   test('Should block submit if the name is an empty string', () => {
      wrapper.setState({ name: '    ', amount: '499.1', error: undefined });
      wrapper.find('form').simulate('submit', { preventDefault: () => {} });
      expect(addTransaction).not.toHaveBeenCalled();
      expect(wrapper.state('error')).toBe('Please enter the transaction name');
      expect(wrapper).toMatchSnapshot();
   });
});
