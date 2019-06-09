import { ADD_TRANSACTION, REMOVE_ALL_TRANSACTIONS, REMOVE_TRANSACTION } from '../../store/actions/actionTypes';
import { addTransaction, removeTransaction, removeAllTransactions } from '../../store/actions';

describe('ACTIONS - transactions', () => {
   test('Should generate "remove all transactions" action object', () => {
      expect(removeAllTransactions()).toEqual({ type: REMOVE_ALL_TRANSACTIONS });
   });

   test('Should generate "remove transaction" action object (by id)', () => {
      const action = removeTransaction('qwerty123');
      expect(action).toEqual({ type: REMOVE_TRANSACTION, id: 'qwerty123' });
   });

   test('Should generate "add transaction" action object', () => {
      const action = addTransaction('bills', '43.12');
      expect(action).toEqual({
         type: ADD_TRANSACTION,
         transaction: {
            id: expect.any(String),
            name: 'bills',
            amount: 43.12
         }
      });
   });
});
