var fixedRect, movingRect;
var O1, O2;

function setup() {
  createCanvas(800,400);

  fixedRect =   createSprite(400, 100, 50, 50);
  fixedRect.shapeColor = "blue";
  fixedRect.velocityY = 5;

  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "blue";
  movingRect.velocityY = -5;

  O1 = createSprite(200, 100, 50, 50);
  O1.shapeColor = "green";
  //O1.velocityX = 7;

  O2 = createSprite(400, 100, 50, 50);
  O2.shapeColor = "green";
  O2.velocityX = -5;
}

function draw() {

  background(0); 

movingRect.x = World.mouseX;
movingRect.y = WorldmouseY;

if(isTouching(movingRect, O1)){
  O1.shapeColor = "red";
  movingRect.shapeColor = "red";
}
else{
  O1.shapeColor = "green";
  movingRect.shapeColor = "blue";
}
  drawSprites();
}

