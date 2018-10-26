export const SET_COLOR = 'SET_COLOR';
export function setColor(color, value) {
  return {
    type: SET_COLOR,
    color, value
  }
}
