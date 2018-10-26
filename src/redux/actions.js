export const SET_COLOR = 'SET_COLOR';

export function setColor(value, color) {
  return {
    type: SET_COLOR,
    color,
    value
  }
}
