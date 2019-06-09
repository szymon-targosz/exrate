import React from 'react';
import { HighestTransaction } from '../../components/HighestTransaction';
import { shallow } from 'enzyme';
import transactions from '../fixtures/transactions';

describe('COMPONENT - HighestTransaction', () => {
   test('Should render HighestTransaction correctly', () => {
      const wrapper = shallow(<HighestTransaction transaction={transactions[0]} rate={4.46} />);
      expect(wrapper).toMatchSnapshot();
   });
   
   test('Should not render HighestTransaction if there is no transaction', () => {
      const wrapper = shallow(<HighestTransaction transaction={undefined} rate={4.46} />);
      expect(wrapper).toMatchSnapshot();
   });
});
