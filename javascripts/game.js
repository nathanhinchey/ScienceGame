(function() {
  'use strict';
  if (typeof Science === 'undefined') {
    window.Science = {};
  }

  var Game = Science.Game = function () {
    this.platforms = [];
  };

  Game.prototype.draw = function (ctx) {
    this.platforms.forEach(function (platform) {
      platform.draw(ctx);
    });
  };

  Game.prototype.start = function () {
    var canvas = $("#canvas");
    var ctx = canvas[0].getContext("2d");
    Science.Levels.level1(this);
    this.draw(ctx);
  };
}());
