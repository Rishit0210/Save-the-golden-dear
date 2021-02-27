var bg;
var map, heart, tri;
var tigerGroup, triGroup, heartGroup;
var count=20
var power='off'

var gameState=1

function preload(){
   h1=loadImage("Images/1.png")
   h2=loadImage("Images/2.png")
   h3=loadImage("Images/3.png")
   h4=loadImage("Images/4.png")
   bg=loadImage('Images/BG.jpg')
   heart=loadImage('Images/heart.png')
   tri=loadImage('Images/tri.png')
   gameEnd=loadImage('Images/gameEnd.png')
   win=loadImage('Images/win.png')
}

function setup(){
    createCanvas(1500,680)
    tigerGroup=createGroup()
    powerGroup=createGroup()
    triGroup=createGroup()
    heartGroup=createGroup()

    for(var i=0; i<100;i++){
        tiger=new Tiger(Math.round(random(-1500*4-750,width-750)),Math.round(random(-680*4-340,height-340)))

    }
    for(var i=0; i<20;i++){
        heart1=new Heart(Math.round(random(-1500*4-750,width-750)),Math.round(random(-680*4-340,height-340)))

    }
    for(var i=0; i<20;i++){
        tri1=new Tri(Math.round(random(-1500*4-750,width-750)),Math.round(random(-680*4-340,height-340)))

    }
    player=new Player()
    deer=new Deer()
   
    healthBar=createSprite(camera.position.x+800, camera.position.y+100)
    healthBar.addImage(h1)

 
}

function draw(){
   
    if(gameState===1){
        start()
    }
    if(gameState===2){
        play()
    }
    if(gameState===3){
      winGame()
    }
    if(gameState===0){
        end()
    }
}   
function start(){
    if(keyDown('space')){
        gameState=2
    }
    textSize(50)
    fill('black')
    text('Save the golden deer',width/2-220,50)

}
function play(){
    image(bg,-1500*4,-680*4, width*5, height*5)
    healthBar.x=camera.position.x+500
    healthBar.y=camera.position.y-250
    if(deer.sprite.isTouching(player.sprite)){
        gameState=3
    }
    if(count===0){
       gameState=0
    }
    for (var i = 0; i < heartGroup.length; i++) {
        if (heartGroup.get(i).isTouching(player.sprite)) {
            heartGroup.get(i).destroy();
            count=count+1;
           
        }
    }

    for (var i = 0; i < triGroup.length; i++) {
        if (triGroup.get(i).isTouching(player.sprite)) {
            triGroup.get(i).destroy();
            power='on'
           
        }
    }
   if(power==='off'){

    for (var i = 0; i < tigerGroup.length; i++) {
        if (tigerGroup.get(i).isTouching(player.sprite)) {
            tigerGroup.get(i).destroy();
            count=count-5;
           
        }
    }
  } 
  if(power==='on'){

    for (var i = 0; i < tigerGroup.length; i++) {
        if (tigerGroup.get(i).isTouching(player.sprite)) {
            tigerGroup.get(i).destroy();
            power='off'
           
        }
    }
  } 
 
    //if(frameCount%50==0){
    //    count-=5
    //} 

    if(count<=20 && count>=16){
        healthBar.addImage(h1)
    }
    if(count<=15 && count>=11){
        healthBar.addImage(h2)
    }
    if(count<=10 && count>=6){
        healthBar.addImage(h3)
    }
    if(count<=5 && count>=0){
        healthBar.addImage(h4)
    }
   
  if(player.sprite.x>-width*4+750){
    if(keyDown('left')){
        player.sprite.x-=10
        player.sprite.y+=0
    }
  }
  if(player.sprite.x<width-750){
    if(keyDown('right')){
        player.sprite.x+=10
        player.sprite.y+=0
    }
  } 
  if(player.sprite.y>-height*4+340){
    if(keyDown('up')){
        player.sprite.x+=0
        player.sprite.y-=10
    }
  }
  if(player.sprite.y<height-340){
    if(keyDown('down')){
        player.sprite.x+=0
        player.sprite.y+=10
    }
  } 
    console.log(mouseX)
    console.log(mouseY)

    camera.position.x=player.sprite.x
    camera.position.y=player.sprite.y
    
   
    drawSprites()
}
function end(){
    imageMode(CENTER)
    image(gameEnd,player.sprite.x,player.sprite.y)
}
function winGame(){
    imageMode(CENTER)
    
    image(win,player.sprite.x,player.sprite.y,1500,680) 
}

