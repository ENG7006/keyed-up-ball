var MovableCircle = function (x, y) {
  this.position = new p5.vector(x, y);

};
  MovableCircle.prototype = {

    radius: 30,
    initialize: function(){};

    update: function(){};

    display: function(){};

    noStroke();
    fill(255, 0, 0);
    ellipse(this.position.x, this.position.y, this.radius / 2, this.radius / 2);
  };

    createCanvas(400, 400);
    var myMovingBall = new MovableCircle(width / 2, height / 2);
setup = function() {

};

draw = function() {

};
