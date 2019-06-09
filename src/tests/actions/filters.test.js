import { SET_TEXT_FILTER, SORT_ALPHA, SORT_DESC, SORT_ASC } from '../../store/actions/actionTypes';
import { setTextFilter, sortAlpha, sortDesc, sortAsc } from '../../store/actions';

describe('ACTIONS - filters', () => {
   test('Should generate "set text filter" action object', () => {
      const action = setTextFilter('js');
      expect(action).toEqual({ type: SET_TEXT_FILTER, text: 'js' });
   });

   test('Should generate "sort alphabetically" action object', () => {
      expect(sortAlpha()).toEqual({ type: SORT_ALPHA });
   });

   test('Should generate "sort descending" action object', () => {
      expect(sortDesc()).toEqual({ type: SORT_DESC });
   });

   test('Should generate "sort ascending" action object', () => {
      expect(sortAsc()).toEqual({ type: SORT_ASC });
   });
});
