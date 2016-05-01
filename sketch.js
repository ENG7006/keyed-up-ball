var MovinBall = function (x, y){
  this.position = new p5.Vector (x, y);
  this.MoveStupid = {x: 5, y: 5};
};

MovinBall.prototype = {
  radius : 20,

  initialize: function() {
    this.WListener = new KeyListener('W', this.goUp, this);
    this.AListener = new KeyListener('A', this.goLeft, this);
    this.SListener = new KeyListener('S', this.goDown, this);
    this.DListener = new KeyListener('D', this.goRight, this);
  },

  update: function () {
    this.WListener.listen();
    this.AListener.listen();
    this.SListener.listen();
    this.DListener.listen();
  },

  display: function () {
    noStroke();
    fill(255, 0, 132);
    ellipse(this.position.x, this.position.y, this.radius, this.radius);
  },

  goUp: function () {
    this.position.y = constrain(this.position.y -= this.MoveStupid.y, this.radius, height - this.radius);
  },

  goLeft: function () {
    this.position.x = constrain(this.position.x -= this.MoveStupid.x, this.radius, width - this.radius);
  },

  goDown: function () {
    this.position.y = constrain(this.position.y += this.MoveStupid.x, this.radius, height - this.radius);
  },

  goRight: function () {
    this.position.x = constrain(this.position.x += this.MoveStupid.x, this.radius, width - this.radius);
  },
};

setup = function() {
  createCanvas(600, 600);
  ellipseMode(RADIUS);
  NewBabyBall = new MovinBall(width / 2, height / 2);
  NewBabyBall.initialize();
};

draw = function() {
  background(50);
  NewBabyBall.update();
  NewBabyBall.display();
};
