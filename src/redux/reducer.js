import { SET_COLOR } from './actions';

export default function (state = {}, action) {
  switch(action.type) {
    case SET_COLOR:
      return Object.assign({}, state, { [action.color]: parseInt(action.value, 10) });
    default:
      return state;
  }
}
