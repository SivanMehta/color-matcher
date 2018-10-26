export const SET_COLOR = 'SET_COLOR';
export function setColor(value, color) {
  return {
    type: SET_COLOR,
    color,
    value
  };
}

export const RESET_COLORS = 'RESET_COLORS';
export function resetColors() {
  return {
    type: RESET_COLORS
  };
}

export const CHEAT = 'CHEAT';
export function cheat() {
  return {
    type: CHEAT
  };
}

export const HINT = 'HINT';
export function hint() {
  return {
    type: HINT
  };
}
