import * as utils from '../src/utils';
import assume from 'assume';

describe('Utilities', function () {
  it('should correctly format a given color', function () {
    const magenta = {
      red: 255,
      blue: 255,
      green: 0
    };
    assume(utils.numsToColors(magenta)).equals('#ff00ff');
  });

  it('should provide a shape to check color shape', function () {
    assume(utils.colorShape).exists();
  });
});
