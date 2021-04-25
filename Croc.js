class Croc{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.image=loadImage("crocodile.png");
    }

    display(){
        imageMode(CENTER);
        image(this.image,this.x,this.y,100,100);
        image.velocityY=10;
    }
}