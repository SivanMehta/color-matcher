import React, { PureComponent } from 'react';

export default class Square extends PureComponent {
  toHex(value) {
    return value.toString(16).padStart(2, '0');
  }

  numsToColors({ red, green, blue }) {
    return `#${this.toHex(red)}${this.toHex(green)}${this.toHex(blue)}`;
  }

  render() {
    const { width, height, color } = this.props;
    const fill = this.numsToColors(color);
    return (
      <svg viewBox={ `0 0 ${width} ${height}`} xmlns="http://www.w3.org/2000/svg">
        <rect
            x="0" y="0"
            rx="10" ry="10"
            width={ width } height={ height }
            fill={ fill }
            />
      </svg>
    );
  }
}
