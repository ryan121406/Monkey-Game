var player, player_running;
var back,backImage;
var banana,bananaImage;
var obstacle, obstacleImage, obstaclesGroup;
var bananaGroup;
var ground
var score = 0;

function preload() {

backImage = loadImage("jungle.jpg");
obstacleImage = loadImage("stone.png");
bananaImage = loadImage("banana.png");
player_running =loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png", "Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");

}

function setup() {
  createCanvas(500, 400);
  
  foodGroup = new Group();
  obstaclesGroup = new Group();
  
  back = createSprite(350,200)
  back.addImage(backImage);
  back.scale = 0.9;
  back.velocityX = -3;
  
  player = createSprite(200,310);
  player.x = 50;
  player.addAnimation("running",player_running);
  player.scale = 0.1;
  
  ground = createSprite(350,350,700,20);
  ground.visible = false;
  ground.x = ground.width/2;
  ground.velocityX = -4;
  
}
function draw() {
  background(220);
  
  player.velocityY = player.velocityY + 0.6;
  player.collide(ground);
  
  if(foodGroup.isTouching(player)){
    
    score = score + 2;
    foodGroup.destroyEach();
    
    
  }
  
 if(obstaclesGroup.isTouching(player)){
    
  player.scale = 0.1;  
  score = 0;
 
 }
  
  switch(score){
      case 10: player.scale = 0.12;
        break;
      case 20: player.scale = 0.14;
        break;
      case 30: player.scale = 0.16;
        break;
      case 40: player.scale = 0.18;
        break;
              default:break;
  }

  

  if (ground.x<0) {
      
    ground.x = ground.width/2;  
      
 }
   if (back.x<100) {
      
    back.x = 350;  
      
 }
  
   if (keyDown("space")&& player.y>=290) {
   
   player.velocityY = -13;
   
  }
   
  
  
  spawnFood();
  spawnObstacles();
  
  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: " + score,300,50);
  
}

function spawnFood(){
  
  if (frameCount %150 === 0) {
    
    banana = createSprite(700, 200);
    banana.y = random(120,200);
    banana.addImage(bananaImage);
    banana.scale = 0.05;
    banana.velocityX = -4;
    banana.lifetime = 333;
    
    foodGroup.add(banana);
    
  }
  
  
  
}

function spawnObstacles() { 
  
  if (frameCount %300 === 0) {
    obstacle = createSprite(700, 200);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.15;
    obstacle.velocityX = -6;
    obstacle.y = 325;
    obstacle.lifetime = 200;
    
    obstaclesGroup.add(obstacle);
    
  }
  
  
  
  
  
}
  