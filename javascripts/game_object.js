(function() {
  'use strict';
  if (typeof Science === 'undefined') {
    window.Science = {};
  }

  var GameObject = Science.GameObject = function (options) {

  };

  GameObject.prototype.draw = function (ctx) {
    ctx.drawImage(this.currentSprite, this.pos[0], this.pos[1]);
  };
}());
