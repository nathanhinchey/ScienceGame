(function() {
  'use strict';
  if (typeof Science === 'undefined') {
    window.Science = {};
  }

  var Player = Science.Player = function (options) {
    GameObject.call(this, options);
  }

  Util.inherits(Player, Science.GameObject);

  
}());
