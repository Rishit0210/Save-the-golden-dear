class Deer{  
    constructor(){
       this.sprite=createSprite(-width*4+800, -height*4+400)
       this.Image=loadImage('Images/goldendeer.png')
       this.sprite.scale=0.4
       this.sprite.addImage("deer", this.Image)
    }
    
    
}