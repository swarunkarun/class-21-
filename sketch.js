var fixedRect, movingRect;
var go1,go2,go3,go4,go5;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityX = 2;

  go1 = createSprite(100,100,40,40);
  go1.shapeColor = "green";

  go2 = createSprite(200,100,40,40);
  go2.shapeColor = "green";

  go3 = createSprite(800,200,40,40);
  go3.shapeColor = "green";
  go3.velocityX = -2;

  go4 = createSprite(400,100,40,40);
  go4.shapeColor = "green";

  go5 = createSprite(500,100,40,40);
  go5.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

  if(isTouching(movingRect,go5)){
    movingRect.shapeColor = "blue";
    go5.shapeColor = "blue";
  }else{
    movingRect.shapeColor = "green";
    go5.shapeColor = "green"; 
   }
  
bounceOff(movingRect,go3)

  drawSprites();
}


