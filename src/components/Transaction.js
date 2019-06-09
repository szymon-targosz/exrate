import React from 'react';
import { generateAmountMsg } from '../helpers/transactions';

const Transaction = ({ transaction, rate, removeHandler }) => {
   const { name, amount } = transaction;

   return (
      <div className="transaction">
         <div className="transaction__data">
            <h3 className="heading-3 mb-s">{name}</h3>
            <p className="transaction__value">
               {generateAmountMsg(amount)} / {generateAmountMsg(amount * rate, 'pl')}
            </p>
         </div>
         {removeHandler && (
            <button className="btn btn--link transaction__btn" onClick={removeHandler}>
               Remove
            </button>
         )}
      </div>
   );
};

export default Transaction;
