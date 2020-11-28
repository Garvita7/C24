const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, box1, ground1, box2;
var pig1,log1;
var box3, box4, pig2, log2;
var log3,box5,log4;
var bird1;
function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  box1 = new Box(700,320,70,70);
  box2 = new Box(920,320,70,70);
  ground1 =  new Ground(600,390,1200,20);
  pig1 = new Pig(810,350);
  log1 = new Log(810,260,300,PI/2);
  box3 = new Box(700,240,70,70);
  box4 = new Box(920,240,70,70);
  pig2 = new Pig(810,220);
  log2 = new Log(810,180,300,PI/2);
  box5 = new Box(810,160,70,70);
  log3 = new Log(760,120,150,PI/7);
  log4 = new Log(870,120,150,-PI/7);
  bird1 = new bird(100,100); 
}

function draw() {
  background(0); 
  Engine.update(engine);
  box1.display();
  box2.display();
  ground1.display();
  pig1.display();
  log1.display();
  box3.display();
  box4.display();
  pig2.display();
  log2.display();
  box5.display();
  log3.display();
  log4.display();
  bird1.display();
  
}