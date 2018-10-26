import React from 'react';
import { mount } from 'enzyme';
import assume from 'assume';
import { App } from '../src/app';

const props = {
  goal: {
    red: 32,
    green: 48,
    blue: 160
  },
  red: 16,
  green: 32,
  blue: 48,
  onHint: () => {},
  timeout: 1000
};

function renderApp(extras = {}) {
  return mount(<App { ...{ ...props, ...extras } }/>);
}

describe('App Layout', function () {
  it('should have the correct title', function () {
    const app = renderApp();
    const different = [
      [props.red, props.goal.red],
      [props.green, props.goal.green],
      [props.blue, props.goal.blue]
    ].some(([actual, expected]) => actual === expected);
    const title = app.find(`h1 span.text-${different ? 'secondary' : 'success'}`);
    assume(title).exists();
  });

  it('should update the title when the colors match', function () {
    const app = renderApp({ ...props.goal });
    const title = app.find('h1 span.text-success').text();
    assume(title).equals('Matched Colors!');
  });

  it('should update the actual color when a slider changes', function (done) {
    const destination = {
      color: 'red',
      value: -100
    };

    function onSetColor(value, color) {
      assume(value).equals(destination.value);
      assume(color).equals(destination.color);
      done();
    }

    const app = renderApp({ onSetColor });
    const slider = app.find('input').first();
    slider.simulate('change', { target: { value: destination.value }});
  });
});
