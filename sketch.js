var MovableCircle = function (x,y) {
  this.position = new p5.Vector (x,y);

};

MovableCircle.prototype = {
  radius: 10,

  initialize: function () {
    this.upListener = new KeyListener('W', this.moveUp, this);
    this.downListener = new KeyListener('S', this.moveDown, this);
    this.rightListener = new KeyListener('D', this.moveRight, this);
    this.leftListener = new KeyListener('A', this.moveLeft, this);
  },

  update: function () {
    this.upListener.listen();
    this.downListener.listen();
    this.rightListener.listen();
    this.leftListener.listen();
  },

  display: function () {
    noStroke();
    fill(255, 0, 0);
    ellipse(this.position.x, this.position.y, this.radius * 2, this.radius * 2);
  },
  moveUp: function () {
    this.position.y -= 1;
  },
  moveDown: function () {
    this.position.y += 1;
  },
  moveRight: function () {
    this.position.x += 1;
  },
  moveLeft: function () {
    this.position.x -= 1;
  },
};
var myMovingBall;

setup = function() {
  createCanvas (600, 600);
  myMovingBall = new MovableCircle(width/2, height/2);
  myMovingBall.initialize();
};

draw = function() {
  background(200);

  myMovingBall.update ();
  myMovingBall.display ();
};
