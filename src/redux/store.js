import { createStore } from 'redux';
import reducer from './reducer';
import { randomColor } from '../colors';

const start = randomColor();
const goal = randomColor();

const initialState = {
  ...start,
  goal
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
