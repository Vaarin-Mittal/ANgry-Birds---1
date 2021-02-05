const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


//declared all the variables
var engine, world;
var ground;
var box1, box2, box3, box4, box5;
var pig1, pig2;
var log1, log2, log3, log4;
var bird;

function setup() {
  //created a canvas
  createCanvas(1200,400);

  engine=Engine.create();
  world=engine.world;

  //created objects for the angry birds game from their respective classes
  ground = new Ground(600,height,1200,20);

  //1st layer
  box1 = new Box(730,350,50,50);
  pig1 = new Pig(800,350);
  box2 = new Box(870,350,50,50);

  log1 = new Log(800,310,200,PI/2)

  //2nd layer
  box3 = new Box(730,270,50,50);
  pig2 = new Pig(800,270);
  box4 = new Box(870,270,50,50);

  log2 = new Log(800,230,200,PI/2)
 
  //3rd layer
  box5 = new Box(800,190,50,50);
  log3 = new Log(760,170,110,PI/5)
  log4 = new Log(840,170,110,-(PI/5))

  //creating Bird
  bird = new Bird(200,200);

}
  
function draw() {
  Engine.update(engine);
  background(0);  
  
  
  //displayed all the variables
  ground.display();

  //1st layer
  box1.display();
  pig1.display();
  box2.display();
  log1.display();
  
  //2nd layer
  box3.display();
  pig2.display();
  box4.display();
  log2.display();
  
  //3rd layer
  box5.display();
  log3.display();
  log4.display();
  
  bird.display();
}