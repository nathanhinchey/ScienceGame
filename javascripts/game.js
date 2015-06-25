(function() {
  'use strict';
  if (typeof Science === 'undefined') {
    window.Science = {};
  }

  var Game = Science.Game = function () {
    this.platforms = [];
  };

  Game.prototype.nextLegalPos = function (path) {
    for (var i = 0; i < path.length; i++){
      if (this.platformPixels[path[i]]){
        return path[i-1];
      }
    }
    return path[path.length - 1];
  };

  Game.prototype.draw = function (ctx) {
    this.platforms.forEach(function (platform) {
      platform.draw(ctx);
    });
  };

  Game.prototype.setPlatformPixels = function () {
    var pixels = this.platformPixels = {};

    this.platforms.forEach(function (platform) {
      var platformX = platform.pos[0];
      var platformY = platform.pos[1];
      for(var i = 0; i < platform.width; i++) {
        for(var j = 0; j < platform.height; j++) {
          pixels[(platformX + i) + "," + (platformY + j)] = true;
        }
      }
    }.bind(this));
  };

  Game.prototype.start = function () {
    var canvas = $("#canvas");
    var ctx = canvas[0].getContext("2d");
    Science.Levels.level1(this);
    this.setPlatformPixels();
    this.draw(ctx);
  };
}());
