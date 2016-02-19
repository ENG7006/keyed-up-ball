var MovableCircle = function (x, y) {
  this.position = new p5.Vector(x, y);

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
      fill(255, 0, 0);
      ellipse(this.position.x, this.position.y, this.radius * 2, this.radius * 2);

},
moveUp: function(){
  this.position.y -= 1;
},

moveDown: function(){
  this.position.y += 1;
},

moveRight: function(){
  this.position.x += 1;
},

moveLeft: function(){
  this.position.x -= 1;
},

};


setup = function() {
    createCanvas(400, 400);
    myMovingBall = new MovableCircle(width / 2, height / 2);
    myMovingBall.initialize();
};
draw = function() {
  background(255);
  myMovingBall.update();
  myMovingBall.display();

  };
