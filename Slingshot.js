class Slingshot{
    constructor(bodyA, pointB){

var options = {
     bodyA : bodyA,
     pointB : pointB,
     stiffness :0.04,
     length : 10
}
this.sling = Constraint.create(options);
World.add(world,this.sling);
this.bodyA = bodyA;
this.pointB = pointB;
    }

display(){

    if(this.sling.bodyA){
    var pointA = this.sling.bodyA.position;
    var pointB = this.pointB;

push();
    stroke(125,0,0);
    strokeWeight(20);

    line(pointA.x-5, pointA.y, pointB.x-65, pointB.y+5);
    line(pointA.x-5, pointA.y, pointB.x+20, pointB.y+5);
    

pop();

    }

    
}
fly(){
    this.sling.bodyA = null;
}

attach(bodyA){
    this.sling.bodyA = bodyA;
}
}