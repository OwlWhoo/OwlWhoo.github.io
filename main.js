let playerImage;
let GAMEOVER = 0;
let player = {
  x:500,
  y:550,
  hp:100,
  xVel:0,
}

let keysPressed = {};
function preload(){
  playerImage = loadImage("wooper.png");
}

function setup(){
  createCanvas(1000,700);
}
function draw(){
  if(GAMEOVER == 0){
    //background(0);
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
    if (x<1000||x>1) {
      player.x += player.xVel;
    }
  }
}
function keyPressed(){
    keysPressed[key] = true;
}

function keyReleased(){
    keysPressed[key] = false;
}
