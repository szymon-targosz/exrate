import React from 'react';
import { connect } from 'react-redux';
import { removeTransaction, removeAllTransactions } from '../store/actions';
import Transaction from './Transaction';
import TransactionsTotal from './TransactionsTotal';
import { getTotal } from '../helpers/transactions';
import SectionHeader from './UI/SectionHeader';
import { selectTransactions } from '../helpers/transactions';

export const Transactions = ({ removeTransaction, removeAllTransactions, transactions, rate, total }) => (
   <section className="transactions">
      <SectionHeader cssClasses="transactions__header" title="Transactions">
         <button className="btn btn--link" onClick={removeAllTransactions} disabled={!(transactions.length > 0)}>
            Remove All
         </button>
      </SectionHeader>
      <div className="transactions__content">
         <div className="transactions__list">
            {transactions.map(transaction => (
               <Transaction
                  key={transaction.id}
                  removeHandler={() => removeTransaction(transaction.id)}
                  transaction={transaction}
                  rate={rate}
               />
            ))}
            {transactions.length === 0 && <p className="transactions__info p-m">There is no transaction</p>}
         </div>
         <TransactionsTotal total={total} rate={rate} quantity={transactions.length} />
      </div>
   </section>
);

const mapStateToProps = ({ transactions, rate, filters }) => {
   const selected = selectTransactions(transactions, filters);
   const total = getTotal(selected);
   return { transactions: selected, rate, total };
};

const mapDispatchToProps = dispatch => ({
   removeTransaction: id => dispatch(removeTransaction(id)),
   removeAllTransactions: () => dispatch(removeAllTransactions())
});

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);
