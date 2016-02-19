var MovableCircle = function (x, y) {
  this.position = new p5.Vector(x, y);
};

MovableCircle.prototype = {

  radius: 50,

  initialize: function () {
    this.upListener = new KeyListener('W', this.moveUp, this);
  },

  update: function () {
    this.upListener.listen();
  },

  display: function () {
    noStroke();
    fill(255,0,0);
    ellipse(this.position.x, this.position.y, this.radius * 2, this.radius * 2);
  },

  moveUp: function () {
    this.position.y -=1;
  },
};



setup = function() {
  createCanvas(400,400);
  myMovingBall = new MovableCircle(width / 2, height / 2);
  myMovingBall.initialize();
};

draw = function() {
background(255);

myMovingBall.update();
myMovingBall.display();
};
