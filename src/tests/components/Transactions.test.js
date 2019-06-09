import React from 'react';
import { Transactions } from '../../components/Transactions';
import { shallow } from 'enzyme';
import transactions from '../fixtures/transactions';

let wrapper, removeTransaction, removeAllTransactions;

beforeEach(() => {
   removeTransaction = jest.fn();
   removeAllTransactions = jest.fn();
   wrapper = shallow(
      <Transactions
         transactions={transactions}
         removeTransaction={removeTransaction}
         removeAllTransactions={removeAllTransactions}
         rate={4.46}
         total={451.69}
      />
   );
});

describe('COMPONENT - Transactions', () => {
   test('Should render Transactions correctly', () => {
      expect(wrapper).toMatchSnapshot();
   });

   test('Should render Transactions with empty message', () => {
      wrapper.setProps({ transactions: [], rate: 0, total: 0 });
      expect(wrapper).toMatchSnapshot();
   });

   test('Should handle removeAllTransactions', () => {
      wrapper.find('button').simulate('click');
      expect(removeAllTransactions).toHaveBeenCalled();
   });
});
