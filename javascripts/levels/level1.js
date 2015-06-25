(function() {
  'use strict';
  if (typeof Science === 'undefined') {
    window.Science = {};
  }

  var floor = new Science.Platform({
    pos: [0, 600],
    length: 800
  });

  var height2Left = new Science.Platform({
    pos: [100, 480],
    length: 200
  });

  var height2Right = new Science.Platform({
    pos: [500, 480],
    length: 200
  });

  var platforms = [floor, height2Left, height2Right];
  Science.Levels = {};
  Science.Levels.level1 = function (game) {
    game.platforms = platforms;
  };
}());
