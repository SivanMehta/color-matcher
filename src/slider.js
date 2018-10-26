import React, { PureComponent } from 'react';
import { numsToColors, colorShape } from './utils';
import PropTypes from 'prop-types';

export default class Slider extends PureComponent {
  constructor() {
    super(...arguments);
    this.onChange = this.onChange.bind(this);
    this.svg = this.svg.bind(this);
  }

  onChange(e) {
    this.props.onChange(e.target.value);
  }

  svg() {
    const { color, actual } = this.props;

    const start = { ...actual };
    start[color] = 0;

    const stop = { ...actual };
    stop[color] = 255;

    return (
      <svg height='40px' width='100%' xmlns='http://www.w3.org/2000/svg'>
        <defs>
          <linearGradient id={ `grad-${color}` } x1='0%' y1='0%' x2='100%' y2='0%'>
            <stop offset='0%' style={{ stopColor: numsToColors(start) }} />
            <stop offset='100%' style={{ stopColor: numsToColors(stop) }} />
          </linearGradient>
        </defs>
        <rect
          x='0' y='0'
          rx='10' ry='10'
          width='100%' height='100%'
          fill={ `url(#grad-${color})` }
        />
      </svg>
    );
  }

  render() {
    const { value, color } = this.props;
    return (
      <div>
        <h3 className='text-center'>{ color }</h3>
        <input
          className='slider'
          type='range'
          min='0'
          max='250'
          step='10'
          value={ value }
          onChange={ this.onChange }/>
        { this.svg() }
      </div>
    );
  }
}

Slider.propTypes = {
  value: PropTypes.number,
  color: PropTypes.string,
  actual: colorShape,
  onChange: PropTypes.func
};
