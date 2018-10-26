import { SET_COLOR, RESET_COLORS, CHEAT } from './actions';
import { initialState } from '../utils';

export default function (state = {}, action) {
  switch (action.type) {
    case SET_COLOR:
      return Object.assign({}, state, { [action.color]: parseInt(action.value, 10) });
    case RESET_COLORS:
      return initialState();
    case CHEAT:
      return Object.assign({}, state, { ...state.goal, cheated: true });
    default:
      return state;
  }
}
