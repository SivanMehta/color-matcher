import React, { PureComponent, Fragment } from 'react';

export default class Slider extends PureComponent {
  constructor() {
    super(...arguments);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.props.onChange(e.target.value);
  }

  render () {
    const { value } = this.props;
    return (
      <input
        type="range"
        min="0"
        max="250"
        value={ value }
        onChange={ this.onChange }/>
    )
  }
}
