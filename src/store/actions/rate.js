import { SET_EXCHANGE_RATE } from './actionTypes';

export const setExchangeRate = rate => ({ type: SET_EXCHANGE_RATE, rate: parseFloat(rate) });