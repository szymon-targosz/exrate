import numeral from 'numeral';
import 'numeral/locales';

const getHighest = transactions =>
   transactions.length === 0 ? undefined : transactions.reduce((prev, curr) => (prev.amount > curr.amount ? prev : curr), []);

const getTotal = transactions => transactions.map(transaction => transaction.amount).reduce((sum, val) => sum + val, 0);

const selectTransactions = (transactions, { text, sort }) => {
   return transactions
      .filter(transaction => {
         const textMatch = transaction.name.toLowerCase().includes(text.toLowerCase());
         return textMatch;
      })
      .sort((a, b) => {
         if (sort === 'alpha') {
            return a.name > b.name ? 1 : -1;
         } else if (sort === 'asc') {
            return a.amount - b.amount;
         } else {
            return b.amount - a.amount;
         }
      });
};

const generateAmountMsg = (amount, locale = 'de', decsFit = false) => {
   numeral.locale(locale);

   let decNums = '00';
   if (decsFit) {
      const decs = amount.toString().split('.')[1] || '';
      let i = 0;
      while (i < decs.length - 2) {
         decNums += 0;
         i++;
      }
   }

   return numeral(amount).format(`0,0.${decNums} $`);
};

export { getHighest, getTotal, selectTransactions, generateAmountMsg };
