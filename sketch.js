var track

var score = 0;

function preload(){
  track = loadImage("images/track.jpg");
  carimg = loadImage("images/car1.png");
  car1 = loadImage("images/car2.png");
  car2 = loadImage("images/car3.png");
  car3 = loadImage("images/car4.png");
 
 
}

function setup(){
  canvas = createCanvas(1000, 600);
   raceTrack = createSprite(500,580,10,10);
   raceTrack.addImage("racetrack",track);
   raceTrack.velocityY = 3; 

   car  = createSprite(500,580,20,20);
   car.addImage("car",carimg);
 
   opcarGroup = createGroup();
   opcarGroup1 = createGroup();
   opcarGroup2 = createGroup();
}


function draw(){
  background(20,120,210);

  fill(255,255,255)
  textSize(20);
  text("Score:"+score,10,100);



  if(keyDown(UP_ARROW)){
    setDir(0,-3);
  }
  else if(keyDown(RIGHT_ARROW)){
    setDir(3,0);
  }
  else if(keyDown(LEFT_ARROW)){
    setDir(-3,0);
  }
  spawnCars();

  if(frameCount % 90 ===0&&raceTrack.velocityY===3){
    score++;
  }
  if(car.isTouching(opcarGroup)){
    raceTrack.velocityY = 0;
    text("  Y  O  U    L  O  S  E   ",500,300);
    opcarGroup.setvelocityY(0);
    opcarGroup1.setvelocityY(0);
    opcarGroup2.setvelocityY(0);
  }
  if(car.isTouching(opcarGroup1)){
    raceTrack.velocityY = 0;
    text("  Y  O  U    L  O  S  E   ",500,300);
    opcarGroup.setvelocityY(0);
    opcarGroup1.setvelocityY(0);
    opcarGroup2.setvelocityY(0);
  }
  if(car.isTouching(opcarGroup2)){
    raceTrack.velocityY = 0;
    text("  Y  O  U    L  O  S  E   ",500,300);
    opcarGroup.setvelocityY(0);
    opcarGroup1.setvelocityY(0);
    opcarGroup2.setvelocityY(0);
  }


  drawSprites();
  if(score===10){
    raceTrack.velocityY = 0;
    text("  Y  O  U   W  I  N  ",500,300);
    opcarGroup.setvelocityY(0);
    opcarGroup1.setvelocityY(0);
    opcarGroup2.setvelocityY(0);
 }
}
function setDir(x,y){
   car.x = car.x + x;
   car.y = car.y + y;
}
function spawnCars(){
 if(frameCount%400 === 0){
   var ocar = createSprite(random(300,700),random(-100,-1000),20,20)
   ocar.addImage("carimg1",car1);
   ocar.velocityY = 2.5;

   opcarGroup.add(ocar)
 }

 if(frameCount%300 === 0){
  var ocar2 = createSprite(random(300,700),random(-100,-1000),20,20)
  ocar2.addImage("carimg2",car2);
  ocar2.velocityY = 2.5;

  opcarGroup1.add(ocar2);
}
if(frameCount%100 === 0){
  var ocar3 = createSprite(random(300,700),random(-100,-1000),20,20)
  ocar3.addImage("carimg3",car3);
  ocar3.velocityY = 2.5;

  opcarGroup2.add(ocar3);
 
}

}