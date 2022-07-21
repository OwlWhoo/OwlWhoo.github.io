let playerImage;
let GAMEOVER = 0;

let berryImage
let berryChange = 0.02;

let berries = [{
  x:500,
  y:0,
  yVel:0
}];
  
let player = {
  x:500,
  y:550,
  hp:100,
  xVel:0,
}

let keysPressed = {};
function preload(){
  playerImage = loadImage("wooper.png");
  berryImage = loadImage("berry.png");
}

function setup(){
  createCanvas(1000,700);
}
function draw(){
  if(GAMEOVER == 0){
    background(255);
    image(playerImage, player.x, player.y);
    noFill();
    stroke(255);
    strokeWeight(3);
    rect(10,10,100,20);
    fill(0,255,0);
    strokeWeight(0);
    rect(10,10, player.hp * 0.98,18);
    if (keysPressed["ArrowRight"]){
        player.xVel  +=1;
    }else if (keysPressed["ArrowLeft"]){
        player.xVel -=1;
    }
    player.xVel *= 0.9;
    if (player.x+player.xVel<902 && player.x+player.xVel>1) {
      player.x += player.xVel;
    }
 
    berries.forEach(berry =>{
        image(berryImage,berry.x, berry.y, 48,48);
        noFill();
        berry.yVel += 0.25;
      berry.y += berry.yVel;
    
    })
  }
}
 function keyPressed(){
 keysPressed[key] = true;
}

function keyReleased(){
    keysPressed[key] = false;
}