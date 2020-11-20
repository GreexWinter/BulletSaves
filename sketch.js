var bullet, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(1600,400);

  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);

  bullet = createSprite(50, 200, 50, 20);
  bullet.velocityX = speed;


  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(255,255,255);
}

function draw() {
  background(0, 0, 0); 

  if(hasCollided(bullet, wall)){
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed / thickness*thickness*thickness
    if(damage < 10){
      fill("Green");
      textSize(40);
      text("Effective!", 700, 50);
      bullet.shapeColor = color(0, 255, 0);
    }
    if(damage > 10){
      fill("Red");
      textSize(40);
      text("Not Effective!", 700, 50);
      bullet.shapeColor = color(255, 0, 0);
    }
  }
  drawSprites();
}

function hasCollided(lbullet, lwall){
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge >= wallLeftEdge){
    return true;
  }
  return false;
}