import React from 'react';
import { mount } from 'enzyme';
import assume from 'assume';
import Square from '../src/square';

const props = {
  color: {
    red: 32,
    green: 48,
    blue: 160
  },
  width: 100,
  height: 200
};

describe('Square', function () {
  let square;
  beforeEach(function () {
    square = mount(<Square { ...props }/>);
  });
  afterEach(function () {
    square.unmount();
  });

  it('should set the viewbox correctly', function () {
    const viewBox = square.find('svg').prop('viewBox');
    assume(viewBox).equals(`0 0 ${props.width} ${props.height}`);
  });

  it('should set the correct height and width', function () {
    const height = square.find('rect').prop('height');
    const width = square.find('rect').prop('width');

    assume(height).equals(props.height);
    assume(width).equals(props.width);
  });

  it('should set the correct fill', function () {
    const fill = square.find('rect').prop('fill');
    assume(fill).equals('#2030a0');
  });
});
