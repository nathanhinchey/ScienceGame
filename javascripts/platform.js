(function() {
  'use strict';
  if (typeof Science === 'undefined') {
    window.Science = {};
  }

  var THICKNESS = 5;

  var Platform = Science.Platform = function(options){
    this.length = options.length;
    this.pos = options.pos;
    this.thickness = THICKNESS;
  };

  Platform.prototype.draw = function(ctx){
    ctx.lineWidth = this.thickness;
    ctx.beginPath();
    ctx.moveTo(this.pos[0], this.pos[1]);
    ctx.lineTo(this.pos[0] + this.length, this.pos[1]);
    ctx.stroke();
  };
}());
