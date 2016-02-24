var MovableCircle = function(x, y) {
  this.position = new p5.Vector(x, y);
  this.movementStep = {x: 3, y: 3};
};

MovableCircle.prototype = {
  radius:15,

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
    fill(255, 0, 0);
    ellipse(this.position.x, this.position.y, this.radius, this.radius);
  },

  moveUp: function () {
    this.position.y = constrain(this.position.y -= this.movementStep.y, this.radius, height - this.radius);
  },

  moveDown: function () {
    this.position.y = constrain(this.position.y += this.movementStep.y, this.radius, height - this.radius);
  },

  moveLeft: function () {
    this.position.x = constrain(this.position.x -= this.movementStep.x, this.radius, width - this.radius);
  },

  moveRight: function () {
    this.position.x = constrain(this.position.x += this.movementStep.x, this.radius, width - this.radius);
  }
};

function setup() {
  createCanvas(600, 400);
  ellipseMode(RADIUS);
  myMovingBall = new MovableCircle(width / 2, height / 2);
  myMovingBall.initialize();
};

function draw() {
  background(100);
  myMovingBall.update();
  myMovingBall.display();
};
