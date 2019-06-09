import { SET_EXCHANGE_RATE } from '../../store/actions/actionTypes';
import { setExchangeRate } from '../../store/actions';

describe('ACTIONS - rate', () => {
   test('Should generate "set exchange rate" action object', () => {
      const action = setExchangeRate('21.3532');
      expect(action).toEqual({ type: SET_EXCHANGE_RATE, rate: 21.3532 });
   });
});
