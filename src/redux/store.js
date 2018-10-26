import { createStore } from 'redux';
import reducer from './reducer';
import { initialState } from '../utils';

const startingState = initialState();

const store = createStore(
  reducer,
  startingState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
