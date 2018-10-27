import {
  numsToColors, colorShape, initialState, matched
} from '../src/utils';
import assume from 'assume';

describe('Utilities', function () {
  it('should correctly format a given color', function () {
    const magenta = {
      red: 255,
      blue: 255,
      green: 0
    };
    assume(numsToColors(magenta)).equals('#ff00ff');
  });

  it('should provide a shape to check color shape', function () {
    assume(colorShape).exists();
  });

  it('should provide a fleshed out initial state', function () {
    const state = initialState();

    assume(state.red).is.a('number');
    assume(state.blue).is.a('number');
    assume(state.green).is.a('number');
    assume(state.goal.red).is.a('number');
    assume(state.goal.blue).is.a('number');
    assume(state.goal.green).is.a('number');
    assume(state.cheated).is.a('boolean');
    assume(state.cheating).is.a('boolean');
  });

  it('should correctly compare states', function () {
    const different = matched({
      red: 1,
      blue: 1,
      green: 1
    }, {
      red: 1,
      blue: 1,
      green: 2
    });

    assume(different).is.false();

    const same = matched({
      red: 1,
      blue: 1,
      green: 1
    }, {
      red: 1,
      blue: 1,
      green: 1
    });

    assume(same).is.true();

  });
});
