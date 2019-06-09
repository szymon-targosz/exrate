import { getHighest, getTotal, selectTransactions, generateAmountMsg } from '../../helpers/transactions';
import transactions from '../fixtures/transactions';

describe('HELPER - getHighest', () => {
   test('Should return the largest transaction', () => {
      expect(getHighest(transactions)).toEqual(transactions[1]);
   });

   test('Should return undefined if there are no transactions', () => {
      expect(getHighest([])).toBe(undefined);
   });
});

describe('HELPER - getTotal', () => {
   test('Should return the total value of all transactions', () => {
      expect(getTotal(transactions)).toBe(451.69);
   });

   test('Should return the 0 if there are no transactions', () => {
      expect(getTotal([])).toBe(0);
   });
});

describe('HELPER - generateAmountMsg', () => {
   test('Should generate the correct amount message', () => {
      const msgEUR = generateAmountMsg(123.9);
      const msgPLN = generateAmountMsg(123.9, 'pl');

      expect(msgEUR).toBe('123,90 €');
      expect(msgPLN).toBe('123,90 PLN');
   });

   test('Should generate the message with a matched number of numbers after the decimal mark (at least 2 numbers after decimal point)', () => {
      const msgEUR = generateAmountMsg(123.9, undefined, true);
      const msgPLN = generateAmountMsg(123.97563, 'pl', true);

      expect(msgEUR).toBe('123,90 €');
      expect(msgPLN).toBe('123,97563 PLN');
   });
});

describe('HELPER - selectTransactions', () => {
   test('Should filter by text value', () => {
      const filters = { text: 'pho', sort: 'alpha' };
      const res = selectTransactions(transactions, filters);
      expect(res).toEqual([transactions[2], transactions[1]]);
   });
   
   test('Should sort alphabetically', () => {
      const filters = { text: '', sort: 'alpha' };
      const res = selectTransactions(transactions, filters);
      expect(res).toEqual([transactions[0], transactions[2], transactions[1]]);
   });
   
   test('Should sort descending', () => {
      const filters = { text: '', sort: 'desc' };
      const res = selectTransactions(transactions, filters);
      expect(res).toEqual([transactions[1], transactions[2], transactions[0]]);
   });
   
   test('Should sort ascending', () => {
      const filters = { text: '', sort: 'asc' };
      const res = selectTransactions(transactions, filters);
      expect(res).toEqual([transactions[0], transactions[2], transactions[1]]);
   });
});