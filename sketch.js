var track;var trackIMG;var runnerImg; var runner;
function preload(){
 trackIMG=loadImage("path.png");
 runnerIMG=loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  track=createSprite(200);
  track.addImage(trackIMG);
  track.velocityY=4;
  track.scale=1.2;
  runner=createSprite(200,200);
  runner.addAnimation("moving",runnerIMG);
  runner.scale=0.05;




}

function draw() {
  background("white");
  drawSprites();
  if(track.y>400){
    track.y=20;
  }
  runner.x=World.mouseX;
  if(runner.x>310){
    runner.x=300;
  }
  if(runner.x<90){
    runner.x=100;
  }
}
