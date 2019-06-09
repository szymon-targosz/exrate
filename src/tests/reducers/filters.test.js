import { SET_TEXT_FILTER, SORT_ALPHA, SORT_ASC, SORT_DESC } from '../../store/actions/actionTypes';
import filtersReducer from '../../store/reducers/filters';

describe('REDUCER - filters', () => {
   test('Should set default filters state', () => {
      const state = filtersReducer(undefined, { type: '@@INIT' });
      expect(state).toEqual({
         text: '',
         sort: 'alpha'
      });
   });

   test('Should set text filter', () => {
      const state = filtersReducer(undefined, { type: SET_TEXT_FILTER, text: 'car' });
      expect(state).toEqual({
         text: 'car',
         sort: 'alpha'
      });
   });

   test('Should set the sorting to alphabetical', () => {
      const currentState = {
         text: '',
         sort: 'desc'
      };
      const state = filtersReducer(currentState, { type: SORT_ALPHA });
      expect(state).toEqual({
         text: '',
         sort: 'alpha'
      });
   });

   test('Should set the sorting to descending', () => {
      const currentState = {
         text: '',
         sort: 'alpha'
      };
      const state = filtersReducer(currentState, { type: SORT_DESC });
      expect(state).toEqual({
         text: '',
         sort: 'desc'
      });
   });

   test('Should set the sorting to ascending', () => {
      const currentState = {
         text: '',
         sort: 'alpha'
      };
      const state = filtersReducer(currentState, { type: SORT_ASC });
      expect(state).toEqual({
         text: '',
         sort: 'asc'
      });
   });
});
