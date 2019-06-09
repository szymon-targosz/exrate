import { SORT_ALPHA, SORT_ASC, SORT_DESC, SET_TEXT_FILTER } from './actionTypes';

const sortAlpha = () => ({ type: SORT_ALPHA });

const sortDesc = () => ({ type: SORT_DESC });

const sortAsc = () => ({ type: SORT_ASC });

const setTextFilter = (text = '') => ({ type: SET_TEXT_FILTER, text });

export { sortAlpha, sortDesc, sortAsc, setTextFilter };
