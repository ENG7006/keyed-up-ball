var MovableCircle = function (x,y) {
  this.position = new p5.Vector (x,y);
  this.speed = 5;

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
    this.position.y = this.move(this.position.y, this.speed * -1, height);
  },
  moveDown: function () {
    this.position.y = this.move(this.position.y, this.speed, height);
  },
  moveRight: function () {
    this.position.x = this.move(this.position.x, this.speed, width);
  },
  moveLeft: function () {
    this.position.x = this.move(this.position.x, this.speed * -1, width);
  },
  move: function(position, speed, upperLimit) {
    var newPosition = constrain(position + speed, this.radius, upperLimit - this.radius);
    return newPosition;
    // This is refactored from the constrains under each moveDirection functions---example from moveLeft: this.position.x = constrain(this.position.x - this.speed, this.radius, width - this.radius);
    //   move: function(value, speed, upperLimit) {
    //  return constrain(value + speed, this.radius, upperLimit - this.radius); This is a bit less spelled out than what is currently being used with var newPosition instead of jumping right into return constrain...
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
