 var player,ground;
 var obstaclesgroup,coinsgroup,riddlesgroup;
 var groundimg,animal,playerimg;
 var choose = 0; 

 function preload (){
  groundimg = loadImage("ground2.png");
  playerimg = loadImage("player1.png");
  player2img = loadImage("player2.png");                      
 }

function setup() {
  createCanvas(800,400); 
  player = createSprite(50, 200, 50, 50); 
  ground = createSprite(400,390,800,30);  
  animal = createSprite(400,370,50,50);
  ground.addImage("image",groundimg);
  ground.velocityX = -10;
 obstaclesgroup = new Group(); 
 riddlesgroup = new Group();
 coinsgroup = new Group ();
}

function draw() {
 

  if(choose === 0){
    background(255,255,255); 
   image( playerimg,20,200,200,200) 
   image( player2img,400,210,200,220) 
  }

  if(keyDown("space")){
   player.velocityY = -12;  
  }
  player.velocityY = player.velocityY+1;
  //if(keyCode=== 68 ) {
   // player.y = player.y + 20;
  //} 
  
  if(ground.x<0){
  ground.x = ground.width/2 
   } 

   if(obstaclesgroup.isTouching(animal)){
    animal.velocityY=-12; 
   } 
   if(riddlesgroup.isTouching(animal)){
    animal.velocityY=-12; 
   }
   animal.velocityY = animal.velocityY+1;

  player.collide(ground);  
  animal.collide(ground);

  

  spawnObstacles();
  riddles();
  coins();

  drawSprites(); 


} 
function spawnObstacles(){
if(frameCount % 60 === 0) { 
  var obstacle = createSprite(800,370,50,50);
  //obstacle.x = Math.round(random (200,600)); 
  obstacle.velocityX = -10;  
  obstaclesgroup.add(obstacle);
} 
} 
function riddles () {
  if(frameCount % 480 === 0) {
 var booster1 = createSprite(400,370,50,50); 
 booster1.shapeColor = "red";
//booster1.x = Math.round(random(100,600)); 
 booster1.velocityX= -10; 
 riddlesgroup.add(booster1);
  }
} 
 
function coins () {
  if(frameCount % 80 === 0) {
 var coin1 = createSprite(400,370,50,50); 
 coin1.shapeColor = "yellow";
coin1.y = Math.round(random(250,320)); 
 coin1.velocityX= -10; 
 coinsgroup.add(coin1);
  }
} 
