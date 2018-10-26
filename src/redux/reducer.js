import { SET_COLOR, RESET_COLORS, CHEAT } from './actions';
import { randomColors } from '../colors';

export default function (state = {}, action) {
  switch (action.type) {
    case SET_COLOR:
      return Object.assign({}, state, { [action.color]: parseInt(action.value, 10) });
    case RESET_COLORS:
      return randomColors();
    case CHEAT:
      return Object.assign({}, state, state.goal);
    default:
      return state;
  }
}
