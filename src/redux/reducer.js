import { SET_COLOR } from './actions';

export default function (state = {}, action) {
  switch(action.type) {
    case SET_COLOR:
      return Object.assign({}, { [action.color]: action.value });
    default:
      return state;
  }
}
