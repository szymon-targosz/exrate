import { ADD_TRANSACTION, REMOVE_TRANSACTION, REMOVE_ALL_TRANSACTIONS } from '../../store/actions/actionTypes';
import transactionsReducer from '../../store/reducers/transactions';
import transactions from '../fixtures/transactions';

describe('REDUCER - transactions', () => {
   test('Should set default transactions state', () => {
      const state = transactionsReducer(undefined, { type: '@@INIT' });
      expect(state).toEqual([]);
   });

   test('Should add transaction', () => {
      const transaction = {
         id: '4',
         name: 'Shopping',
         amount: 12.67
      };
      
      const state = transactionsReducer(transactions, {
         type: ADD_TRANSACTION,
         transaction
      });
      expect(state).toEqual([ ...transactions, transaction ]);
   });
   
   test('Should remove transaction', () => {
      const state = transactionsReducer(transactions, {
         type: REMOVE_TRANSACTION,
         id: transactions[1].id
      });
      expect(state).toEqual([ transactions[0], transactions[2] ]);
   });
   
   test('Should not remove transaction if id not found', () => {
      const state = transactionsReducer(transactions, {
         type: REMOVE_TRANSACTION,
         id: 'somewrongid'
      });
      expect(state).toEqual(transactions);
   });
   
   test('Should remove all transactions', () => {
      const state = transactionsReducer(transactions, {
         type: REMOVE_ALL_TRANSACTIONS,
      });
      expect(state).toEqual([]);
   });
});
