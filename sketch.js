var MovableCircle = function (x, y) {
  this.position = new p5.Vector(x, y);
  this.speed = {x: 1, y: 1};
};

MovableCircle.prototype = {

  radius: 50,

  initialize: function () {
    this.upListener = new KeyListener('W', this.moveUp, this);
    this.downListener = new KeyListener('S', this.moveDown, this);
    this.leftListener = new KeyListener('A', this.moveLeft, this);
    this.rightListener = new KeyListener('D', this.moveRight, this);
  },

  update: function () {
    this.upListener.listen();
    this.downListener.listen();
    this.leftListener.listen();
    this.rightListener.listen();
  },

  display: function () {
    noStroke();
    fill(255,0,0);
    ellipse(this.position.x, this.position.y, this.radius * 2, this.radius * 2);
  },

  moveUp: function () {
    this.position.y = constrain(this.position.y -= this.speed.y, this.radius, height - this.radius);
  },

  moveDown: function () {
    this.position.y = constrain(this.position.y += this.speed.y, this.radius, height - this.radius);
  },

  moveLeft: function () {
    this.position.x = constrain(this.position.x -= this.speed.x, this.radius, width - this.radius);
  },

  moveRight: function () {
    this.position.x = constrain(this.position.x += this.speed.x, this.radius, width - this.radius);
  }
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
