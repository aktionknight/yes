const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var box1,box2,box3,box4




function setup() {
 var canvas = createCanvas(800,400);


  engine = Engine.create();
  world = engine.world;



  box1 = new Box(200,200,100,100);
  box2 = new Box(140,175,30,150);
  box3 = new Box(260,175,30,150);
  box4 = new Box(200,220,50,50);

  ground = new Ground(200,390,400,30)

}

function draw() {
  background(0);  

box1.display();
box2.display();
box3.display();
box4.display();
ground.display();

}