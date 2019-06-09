import { SET_EXCHANGE_RATE } from '../actions/actionTypes';

export default (state = 0, action) => {
   switch (action.type) {
      case SET_EXCHANGE_RATE:
         return action.rate;

      default:
         return state;
   }
};
