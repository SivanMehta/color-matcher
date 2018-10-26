import PropTypes from 'prop-types';

function randomValue() {
  return Math.floor((Math.random() * 255) / 10) * 10;
}

function randomColor() {
  return {
    red: randomValue(),
    green: randomValue(),
    blue: randomValue()
  };
}

export function randomColors () {
  const start = randomColor();
  const goal = randomColor();

  return {
    ...start,
    goal
  };
}

function toHex(value) {
  return value.toString(16).padStart(2, '0');
}

export function numsToColors({ red, green, blue }) {
  return `#${toHex(red)}${toHex(green)}${toHex(blue)}`;
}

export const colorShape = PropTypes.shape({
  red: PropTypes.number,
  blue: PropTypes.number,
  green: PropTypes.number
});
