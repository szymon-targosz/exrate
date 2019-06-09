import React from 'react';
import { connect } from 'react-redux';
import { getHighest, selectTransactions } from '../helpers/transactions';
import Transaction from './Transaction';
import SectionHeader from './UI/SectionHeader';

export const HighestTransaction = ({ transaction, rate }) => {
   const jsx = (
      <section className="highest">
         <SectionHeader title="Highest transaction" />
         <Transaction transaction={transaction} rate={rate} />
      </section>
   );

   return transaction ? jsx : null;
};

const mapStateToProps = ({ transactions, rate, filters }) => ({
   transaction: getHighest(selectTransactions(transactions, filters)),
   rate
});

export default connect(mapStateToProps)(HighestTransaction);
