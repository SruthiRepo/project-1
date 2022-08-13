var box;

function setup() {
  createCanvas(800,800);
  box = createSprite(400, 400, 50, 50)
}

function draw() 
{
  background(255, 200, 0);
  if(keyIsDown(RIGHT_ARROW)){
     box.position.x += 5;
  }
  if(keyIsDown(LEFT_ARROW)){
    box.position.x -= 5;
 }
 if(keyIsDown(UP_ARROW)){
  box.position.y -= 5;
}
if(keyIsDown(DOWN_ARROW)){
  box.position.y += 5;
}

  drawSprites();
}




