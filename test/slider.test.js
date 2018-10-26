import React from 'react';
import { mount } from 'enzyme';
import Slider from '../src/slider';
import assume from 'assume';

const defaultProps = {
  value: 100,
  color: 'red',
  actual: {
    red: 32,
    green: 48,
    blue: 160
  },
  onChange: () => {}
};

function renderSlider(props = {}) {
  return mount(<Slider { ...{...defaultProps, ...props} }/>);
}

describe('Slider', function () {
  it('should use the correct color as a title', function () {
    const slider = renderSlider();
    const title = slider.find('h3').text();
    assume(title).equals(defaultProps.color)
  });

  it('should have the correct color gradient range', function () {
    const slider = renderSlider();
    const start = slider.find(`stop[offset='0%']`).prop('style');
    const stop = slider.find(`stop[offset='100%']`).prop('style');
    const fill = slider.find('rect').prop('fill');

    assume(start.stopColor).equals('#0030a0');
    assume(stop.stopColor).equals('#ff30a0');
    assume(fill).equals(`url(#grad-${defaultProps.color})`);
  });

  it('should call the given on onChange when interacted with', function (done) {
    const destination = 200;
    function onChange(value) {
      assume(value).equals(destination);
      done();
    }

    const slider = renderSlider({ onChange });
    const input = slider.find('input');
    input.simulate('change', {target: {value: destination}});
  });
});
