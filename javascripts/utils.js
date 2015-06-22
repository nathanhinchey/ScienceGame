(function() {
  'use strict';
  if (typeof Science === 'undefined') {
    window.Science = {};
  }

  var Util = Science.Util = {};

  Util.inherits = function (Sub, Super) {
    function Surrogate () {};
    Surrogate.prototype = Super.prototype;
    Sub.prototype = new Surrogate();
  };
}());
