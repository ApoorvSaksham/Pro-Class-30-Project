class Demon{
    constructor(x,y){
    var options = {
        'restitution':0.8,
        'friction':0.5,
        'density':4
    }

this.body = Bodies.rectangle(x,y,85,65,options);
this.image = loadImage("monster3.png");
World.add(world,this.body); 
this.visibility  = 255;
    }
    
display(){

if(this.body.speed<2){
var angle = this.body.angle;
var pos = this.body.position;
push();
translate(pos.x,pos.y);
rotate(angle);
imageMode(CENTER);
image(this.image, 0, 0, 100,80);
pop();
}
else{

    World.remove(world, this.body);
    push();
    this.visibility = this.visibility - 5 ;
    tint(255,this.visibility);
    pop();

}

    }

}