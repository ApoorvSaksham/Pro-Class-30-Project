const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14,
 block15,block16,block17, block18, block19, block20, block21, block22,  block23, block24, block25, block26, 
 block27, block28, block29,block30,block31,block32;
 var demon1, demon2;

 var bgPic;
var monster1;

var ball;
var slingShot;
var polygon_img;
var launch;

var hexagon;
function preload(){
  polygon_img=loadImage("polygon.png");
  bgPic = loadImage("bgr.jpg");
  monsterimg = loadImage("monster1.png");
}
function setup() {
  createCanvas(1535,750);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();

  stand1 = new Stand(707,430,465,18);
  stand2 = new Stand(1270,245,457,18);
  stand3 = new Stand(80,685,290,140);
  stand4 = new Stand(1270,645,457,18);
  stand5 = new Stand(750,5,1600,10);
  stand6 = new Stand(1530,745,10,1600);
  stand7 = new Stand(5,745,10,1600);
  this.catapult = loadImage("sling.png")
  

monster1 = new Monster(530,395);
monster2 = new Monster(894,395);
demon1 = new Demon(1082,605);
demon2 = new Demon(1458,605);
devil1 = new Devil(1085,210);
devil2 = new Devil(1455,210);
hitter = new Hitter(100,200);

launch = new Slingshot(hitter.body, {x:155, y:455})

  //level 1 
  block1 = new Block(590,395);
  block2 = new Block(630,395);
  block3 = new Block(670,395);
  block4 = new Block(710,395);
  block5 = new Block(750,395);
  block6 = new Block(790,395);
  block7 = new Block(830,395);
  //level 2 
  block8 = new Block(630,347);
  block9 = new Block(670,347);
  block10 = new Block(710,347);
  block11 = new Block(750,347);
  block12 = new Block(790,347);
  //level 3   
  block13 = new Block(670,317);
  block14 = new Block(710,317);
  block15 = new Block(750,317);
  //final
  block16 = new Block(710,257);
  
  
  // level 1 
   block17 = new Block(1150,210);
   block18 = new Block(1190,210);
   block19 = new Block(1230,210);
   block20 = new Block(1270,210);
   block21 = new Block(1310,210);
   block22 = new Block(1350,210);
   block23 = new Block(1390,210);

// level 2 
   block24 = new Block(1190,170);
   block25 = new Block(1230,170);
   block26 = new Block(1270,170);
   block27 = new Block(1310,170);
   block28 = new Block(1350,170);

   //level3
   block29 = new Block(1230,130);
   block30 = new Block(1270,130);
   block31 = new Block(1310,130);

  //level4
 block32 = new Block(1270,90);
 
  // level 1 
  block33 = new Block(1150,610);
  block34 = new Block(1190,610);
  block35 = new Block(1230,610);
  block36 = new Block(1270,610);
  block37 = new Block(1310,610);
  block38 = new Block(1350,610);
  block39 = new Block(1390,610);

// level 2 
  block40 = new Block(1190,570);
  block41 = new Block(1230,570);
  block42 = new Block(1270,570);
  block43 = new Block(1310,570);
  block44 = new Block(1350,570);

  //level3
  block45 = new Block(1230,530);
  block46 = new Block(1270,530);
  block47 = new Block(1310,530);

 //level4
block48 = new Block(1270,490);


}
function draw() {
  background(bgPic); 


  textSize(20);
  fill("lightyellow");
  imageMode(CENTER);
  image(this.catapult,116,513.3,160,190);

  ground.display();
  stand1.display();
  stand2.display();
  
stand4.display();
monster1.display();
monster2.display();
demon1.display();
demon2.display();
devil1.display();
devil2.display();
hitter.display();
launch.display();


  fill(245, 117, 37);
  stroke("brown");
  strokeWeight(15);
  stand3.display();


  
  strokeWeight(2);
  stroke(15);
  fill(103, 250, 90);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("orange");
  block16.display();


  fill(92, 255, 252)
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();

  fill(255, 249, 87)
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();

  fill(255, 84, 229)
  block29.display();
  block30.display();
  block31.display();

  fill(152, 255, 92)
  block32.display();


  fill(66, 255, 142)
  block33.display();
  block34.display();
  block35.display();
  block36.display();
  block37.display();
  block38.display();
  block39.display();

  fill(89, 117, 255)
  block40.display();
  block41.display();
  block42.display();
  block43.display();
  block44.display();

  fill(255, 79, 79)
  block45.display();
  block46.display();
  block47.display();

  fill("yellow")
  block48.display();
  
  strokeWeight(2);
  stroke("yellow")
  fill("red");
  textSize(35);
  textFont("Algeria");
  text("Press 'SPACE' to launch again.  ", 30,60);

  strokeWeight(3);
  stroke("green")
  fill("blue");
  textSize(35);
  textFont("Algeria");
  text("Kill all the Devils and scatter the blocks!! ", 30,120);


  stroke("skyblue")
  fill("skyblue");
  stand5.display();
  stand6.display();
  stand7.display();
 
}


function mouseDragged(){
  Matter.Body.setPosition(hitter.body, {x: mouseX, y:mouseY})
}
function mouseReleased(){
  launch.fly();
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(hitter.body, {x:155, y:445});
   launch.attach(hitter.body);

  }
}
