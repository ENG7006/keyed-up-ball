var MovableCircle = function (x, y) {
  this.position = new p5.Vector(x, y);
  this.speed = 2;
};
  MovableCircle.prototype = {

    radius: 30,

    initialize: function(){
      this.upListener = new KeyListener('W', this.moveUp, this);
      this.leftListener = new KeyListener('A', this.moveLeft, this);
      this.rightListener = new KeyListener('D', this.moveRight, this);
      this.downListener = new KeyListener('S', this.moveDown, this);
},

    update: function(){
      this.upListener.listen();
      this.leftListener.listen();
      this.rightListener.listen();
      this.downListener.listen();

},
    display: function(){
      noStroke();
      fill(100, 0, 0);
      ellipse(this.position.x, this.position.y, this.radius * 2, this.radius * 2);

},
moveUp: function(){
  this.position.y = constrain(this.position.y - this.speed, this.radius, height - this.radius);
},

moveDown: function(){
  this.position.y = constrain(this.position.y + this.speed, this.radius, height - this.radius);
},

moveRight: function(){
  this.position.x = constrain(this.position.x + this.speed, this.radius, width - this.radius);
},

moveLeft: function(){
  this.position.x = constrain(this.position.x - this.speed, this.radius, width - this.radius);
},

};


setup = function() {
    createCanvas(600, 600);
    myMovingBall = new MovableCircle(width / 2, height / 2);
    myMovingBall.initialize();
};
draw = function() {
  background(210);
  myMovingBall.update();
  myMovingBall.display();

  };
