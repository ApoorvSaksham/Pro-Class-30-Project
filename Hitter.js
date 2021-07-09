class Hitter{

    constructor(x,y){
var options = {
    'restitution':0.8,
    'friction':1.0,
    'density':1.5
}
this.body = Bodies.circle(x,y,45,options);
this.image = loadImage("hitter.png");
World.add(world,this.body);
    }

display(){

var pos = this.body.position;
var angle = this.body.angle;
push();
translate(pos.x,pos.y);
rotate(angle);
imageMode(CENTER);
image(this.image,0,0,90,90);
pop();

}
}