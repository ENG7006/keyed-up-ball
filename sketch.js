var MovableCircle = function(x, y) {
  this.position = new p5.Vector(x, y);
  this.movementStep = {x: 3, y: 3};
};

MovableCircle.prototype = {
  radius:15,
  functionArray: [],

  initialize: function () {
    this.functionArray = [
      new KeyListener('W', this.moveUp, this),
      new KeyListener('S', this.moveDown, this),
      new KeyListener('A', this.moveLeft, this),
      new KeyListener('D', this.moveRight, this)
    ];
  },

  update: function () {
    for(var i = 0; i < this.functionArray.length; i++) {
      this.functionArray[i].listen();
    }
  },

  display: function () {
    noStroke();
    fill('#6A0888');
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
  background('#000000');
  myMovingBall.update();
  myMovingBall.display();
};
