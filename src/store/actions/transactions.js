import uuidv4 from 'uuid/v4';
import { ADD_TRANSACTION, REMOVE_TRANSACTION, REMOVE_ALL_TRANSACTIONS } from './actionTypes';

const addTransaction = (name, amount) => ({
   type: ADD_TRANSACTION,
   transaction: {
      id: uuidv4(),
      amount: parseFloat(amount),
      name
   }
});

const removeTransaction = id => ({
   type: REMOVE_TRANSACTION,
   id
});

const removeAllTransactions = () => ({ type: REMOVE_ALL_TRANSACTIONS });

export { addTransaction, removeTransaction, removeAllTransactions };
