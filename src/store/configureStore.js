import { createStore, combineReducers } from 'redux';
import transactionsReducer from './reducers/transactions';
import rateReducer from './reducers/rate';
import filtersReducer from './reducers/filters';

const rootReducer = combineReducers({
   transactions: transactionsReducer,
   rate: rateReducer,
   filters: filtersReducer
});

export default () => createStore(
   rootReducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
