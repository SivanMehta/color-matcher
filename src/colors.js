import PropTypes from 'prop-types';

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
