import React, { PureComponent } from 'react';
import { numsToColors, colorShape } from './utils';
import PropTypes from 'prop-types';

export default class Square extends PureComponent {
  render() {
    const { width, height, color } = this.props;
    const fill = numsToColors(color);
    return (
      <svg viewBox={ `0 0 ${width} ${height}` } xmlns='http://www.w3.org/2000/svg'>
        <rect
          x='0' y='0'
          rx='10' ry='10'
          width={ width } height={ height }
          fill={ fill }
        />
      </svg>
    );
  }
}

Square.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: colorShape
};
