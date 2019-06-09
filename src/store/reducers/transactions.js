import { ADD_TRANSACTION, REMOVE_TRANSACTION, REMOVE_ALL_TRANSACTIONS } from '../actions/actionTypes';

export default (state = [], action) => {
   switch (action.type) {
      case ADD_TRANSACTION:
         return state.concat(action.transaction);

      case REMOVE_TRANSACTION:
         return state.filter(({ id }) => id !== action.id);

      case REMOVE_ALL_TRANSACTIONS:
         return [];

      default:
         return state;
   }
};
