import React from 'react';
import InfoBox from './UI/InfoBox';
import { generateAmountMsg } from '../helpers/transactions';

const TransactionsTotal = ({ total, rate, quantity }) => (
   <section className="total">
      <InfoBox
         description={`Total (${quantity} transactions)`}
         data={`${generateAmountMsg(total)} / ${generateAmountMsg(total * rate, 'pl')}`}
      />
   </section>
);

export default TransactionsTotal;
