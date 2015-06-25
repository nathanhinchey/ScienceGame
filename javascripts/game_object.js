(function() {
  'use strict';
  if (typeof Science === 'undefined') {
    window.Science = {};
  }

  var GameObject = Science.GameObject = function (options) {
    this.height = options.height;
    this.width = options.width;
    this.pos = options.pos;
    this.game = options.game;
    this.vel = 0;

  };

  GameObject.prototype.move = function () {
    var targetPos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];

    var path = this.pathToNextPos(targetPos);
    this.pos = this.game.nextLegalPos(path);
  };


  GameObject.prototype.pathToNextPos = function (nextPos) {
    // return path of pixels between current and next position
    var currX = this.pos[0] + Math.floor(this.width/2);
    var currY = this.pos[1] + this.height;
    var currPos = [currX, currY];

    var rangeX = _.range(currPos[0], nextPos[0]);
    rangeX.push(nextPos[0]);
    var rangeY = _.range(currPos[1], nextPos[1]);
    rangeY.push(nextPos[1]);

    while (rangeX.length > rangeY.length){
      rangeY.push(rangeY[rangeY.length - 1])
    }
    while (rangeY.length > rangeX.length){
      rangeX.push(rangeX[rangeX.length - 1])
    }

    return _.zip(rangeX, rangeY);
  };

  GameObject.prototype.draw = function (ctx) {
    ctx.drawImage(this.currentSprite, this.pos[0], this.pos[1]);
  };
}());
