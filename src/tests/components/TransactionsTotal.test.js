import React from 'react';
import TransactionsTotal from '../../components/TransactionsTotal';
import { shallow } from 'enzyme';

describe('COMPONENT - TransactionsTotal', () => {
   test('Should render TransactionsTotal correctly', () => {
      const wrapper = shallow(<TransactionsTotal total={583.07} rate={3.132321} quantity={7} />);
      expect(wrapper).toMatchSnapshot();
   });

   test('Should render TransactionsTotal correctly (only 1 transaction)', () => {
      const wrapper = shallow(<TransactionsTotal total={583.07} rate={3.132321} quantity={1} />);
      expect(wrapper).toMatchSnapshot();
   });
});
