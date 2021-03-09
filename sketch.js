
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var ground;
var b1,b2,b3,b4,b5;
var rope1,rope2,rope3,rope4;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(350,200,450,40);
	b1=new Ball(360,400);
	b2=new Ball(410,400);
	b3=new Ball(460,400);
	b4=new Ball(510,400);
	b5=new Ball(560,400);
	rope1= new Slingshot(b1.body,{x:200,y:200});
	rope2 = new Slingshot(b2.body,{x:280,y:200});
	rope3 = new Slingshot(b3.body,{x:360,y:200});
	rope4 = new Slingshot(b4.body,{x:420,y:200});
	rope5 = new Slingshot(b5.body,{x:500,y:200});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
 
 ground.display();
 b1.display();
 b2.display();
 b3.display();
 b4.display();
 b5.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
}

function mouseDragged(){
	Matter.Body.setPosition(b5.body,{x:mouseX,y:mouseY});
  }
  
