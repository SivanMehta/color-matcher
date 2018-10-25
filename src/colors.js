function toHex(value) {
  return value.toString(16).padStart(2, '0');
}

export function numsToColors({ red, green, blue }) {
  return `#${toHex(red)}${toHex(green)}${toHex(blue)}`;
}
