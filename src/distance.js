import React, { PureComponent } from 'react';
import { colorShape } from './utils';

const max = 255;

export default class Distance extends PureComponent {
  bar(color, i) {
    const { actual, goal } = this.props;
    const height = 10;
    const width = Math.abs(actual[color] - goal[color]);

    return (
      <rect
        key={ `distance-${i}` }
        x={ max - width } y={ height * i }
        width={ width } height={ height }
        fill={ color }
      />
    );
  }

  render() {
    const bars = ['red', 'green', 'blue'].map(this.bar.bind(this));
    return (
      <svg viewBox={ `0 0 255 30` } xmlns='http://www.w3.org/2000/svg'>
        { bars }
      </svg>
    );
  }
}

Distance.propTypes = {
  actual: colorShape,
  goal: colorShape
};
