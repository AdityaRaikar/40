var basket,basketImg;
var ball,ballImg;
var ground,groundImg;
var score=0;

function preload(){
  groundImg=loadImage("Images/dground.png");
  basketImg=loadImage("Images/basket.png");
  ballImg=loadImage("Images/ball.png");
}

function setup() {
  createCanvas(800,400);

  ground=createSprite(400,200,800,200);
  ground.addImage(groundImg);
  
  ground.scale=2;
  

  basket=createSprite(100,200,0,20);
  basket.addImage(basketImg);
  basket.scale=0.4;

 

}

function draw() {
  background(255);  
  
  
  if(ground.x<260){
    ground.x = 500;
    ground.velocityX=-3;
   }
   if(keyIsDown(RIGHT_ARROW)){
    basket.y =basket.y + 10
  }
  if(keyIsDown(LEFT_ARROW)){
    basket.y = basket.y-10
  }


  if (frameCount % 150 === 0){
    ball = createSprite(600,400,20,20);
   ball.addImage(ballImg);
   ball.velocityX = -6;
  ball.scale = 0.25 ;
   
    //generate random obstacles
    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: ball.y =100;
              break;
     case 2:ball.y=300;
        break;
        case 3:ball.y=200;
        break;
      default: break;
    }
   
    //assign scale and lifetime to the obstacle           
    
    ball.lifetime = 500;
   
   //add each obstacle to the group
   
  }



  drawSprites();
  fill(0);
  textSize(30);
  text("Score:"+score,50,60);
  
  
 
  
}

