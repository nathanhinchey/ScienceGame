(function() {
  'use strict';
  if (typeof Science === 'undefined') {
    window.Science = {};
  }

  var HEIGHT = 5;

  var Platform = Science.Platform = function(options){
    this.width = options.width;
    this.pos = options.pos;
    this.height = HEIGHT;
  };

  Platform.prototype.draw = function(ctx){
    ctx.lineWidth = this.height;
    ctx.beginPath();
    ctx.moveTo(this.pos[0], this.pos[1]);
    ctx.lineTo(this.pos[0] + this.width, this.pos[1]);
    ctx.stroke();
  };
}());
