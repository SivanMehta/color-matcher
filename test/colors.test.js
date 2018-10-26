import * as colors from '../src/colors';
import assume from 'assume';

describe('Color Utilities', function () {
  it('should correctly format a given color', function () {
    const magenta = {
      red: 255,
      blue: 255,
      green: 0
    };
    assume(colors.numsToColors(magenta)).equals('#ff00ff');
  });

  it('should provide a shape to check colors', function () {
    assume(colors.colorShape).exists();
  });
});
