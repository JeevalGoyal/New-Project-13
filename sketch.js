var garden,rabbit,apple;
var gardenImg,rabbitImg,appleImage;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImage = loadImage("apple.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(200,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  if (keyDown("RIGHT_ARROW")){
    rabbit.x=rabbit.x+5
  }

  if (keyDown("LEFT_ARROW")){
    rabbit.x=rabbit.x-5
  }

  randomApple();

  drawSprites();
}

function randomApple(){
  if (frameCount % 80 ==0){
  apple = createSprite(200,0,20,20);
  apple.addImage("apple",appleImage)
  apple.scale=0.1;
  apple.velocityY=10;
  apple.x=Math.round(random(50,350))
  }
}
