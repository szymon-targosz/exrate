import { SET_TEXT_FILTER, SORT_ALPHA, SORT_ASC, SORT_DESC } from '../actions/actionTypes';

const defaultState = {
   text: '',
   sort: 'alpha'
};

export default (state = defaultState, action) => {
   switch (action.type) {
      case SET_TEXT_FILTER:
         return { ...state, text: action.text };

      case SORT_ALPHA:
         return { ...state, sort: 'alpha' };

      case SORT_ASC:
         return { ...state, sort: 'asc' };

      case SORT_DESC:
         return { ...state, sort: 'desc' };

      default:
         return state;
   }
};
