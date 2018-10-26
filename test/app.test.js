import React from 'react';
import { mount } from 'enzyme';
import assume from 'assume';
import App from '../src/app';

describe('App Layout', function () {
  let app;
  before(function () {
    app = mount(<App />);
  });
  after(function () {
    app.unmount();
  });

  it('should have two colors set initally', function () {
    const state = app.state();

    assume(state.red).exists();
    assume(state.goal.red).exists();
    assume(state.green).exists();
    assume(state.goal.green).exists();
    assume(state.blue).exists();
    assume(state.goal.blue).exists();
  });

  it('should have the correct title', function () {
    const state = app.state();
    const different = [
      [state.red, state.goal.red],
      [state.green, state.goal.green],
      [state.blue, state.goal.blue]
    ].some(([actual, expected]) => actual === expected);
    const title = app.find(`h1 span.text-${different ? 'secondary' : 'success'}`);
    assume(title).exists();
  });

  it('should update the title when the colors match', function () {
    const goal = app.state().goal;
    app.setState({ ...goal });
    const title = app.find('h1 span.text-success').text();
    assume(title).equals('Matched Colors!');
  });

  it('should update the actual color when a slider changes', function () {
    const slider = app.find('input').first();
    const destination = -1000;
    slider.simulate('change', {target: {value: destination}});

    assume(app.state('red')).equals(destination);
  });
});
