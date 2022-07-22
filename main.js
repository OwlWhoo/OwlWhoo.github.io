let playerImage;
let GAMEOVER = 0;
let score = 0;
let berryImage
let berryChance = 0.05;

let leafImage
let leafChance = 0.05;

let berries = [{
  x:500,
  y:0,
  yVel:0
}];

let leaves = [{
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
  leafImage = loadImage("Leaf.png");
}

function setup(){
  createCanvas(1000,700);
}
function draw(){
  if(GAMEOVER == 0){
    background(255);
    textSize(32);
    fill(0,255,0);
    text(score,900,40);
    
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
        image(berryImage,berry.x, berry.y, 27,27);
        noFill();
        berry.yVel += 0.25;
      berry.y += berry.yVel;
    
    })
  
    berries.forEach((berry,i) =>{
        if(berry.y > height){
            berries.splice(i,1);
        }
    let touchingPlayer = overlappingRects(player.x, player.y, playerImage.width, playerImage.height, berry.x, berry.y, berryImage.width, berryImage.height);
    if(touchingPlayer){
        score += 1;
        berries.splice(i,1);
    
    }
    })
    
    if(Math.random()<berryChance){
        berries.push({
            x: random(1000),
            y: 0,
          yVel : 0
        })
    }
    
    leaves.forEach(leaf =>{
        image(leafImage,leaf.x, leaf.y, 27,27);
        noFill();
        leaf.yVel += 0.25;
      leaf.y += leaf.yVel;
    
    })
  
    leaves.forEach((leaf,i) =>{
        if(leaf.y > height){
            leaves.splice(i,1);
        }
        let touchingPlayer = overlappingRects(player.x, player.y, playerImage.width, playerImage.height, leaf.x, leaf.y, leafImage.width,leafImage.height);
        if (touchingPlayer && player.hp>0){
            player.hp -= .10;
            leaves.splice(i,1);
        }
      
    })
    
    if(Math.random()<leafChance){
        leaves.push({
            x: random(1000),
            y: 0,
          yVel : 0
        })
    }
  }
}
  
function keyPressed(){
keysPressed[key] = true;
}

function keyReleased(){
    keysPressed[key] = false;
}

function overlappingRects(x1, y1, w1, h1, x2, y2, w2, h2) {
    
    if ((x1<=x2 && x2<=x1+w1)&&(y1<=y2 && y2<=y1+h1)){
        return true;
    }
    if ((x1<=x2+w2 && x2+w2<=x1+w1)&&(y1<=y2 && y2<=y1+h1)){
        return true;
    }
    if ((x1<=x2 && x2<=x1+w1)&&(y1<=y2+h2 && y2+h2<=y1+h1)){
        return true;
    }
    if ((x1<=x2+w2 && x2+w2<=x1+w1)&&(y1<=y2+h2 && y2+h2<=y1+h1)){
        return true;
    }
    return false;
}
