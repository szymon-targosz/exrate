import { SET_EXCHANGE_RATE } from '../../store/actions/actionTypes';
import rateReducer from '../../store/reducers/rate';

describe('REDUCER - rate', () => {
   test('Should set default rate state', () => {
      const state = rateReducer(undefined, { type: '@@INIT' });
      expect(state).toBe(0);
   });

   test('Should set rate value', () => {
      const state = rateReducer(0, { type: SET_EXCHANGE_RATE, rate: 4.43432 });
      expect(state).toBe(4.43432);
   });
});
