const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	
	bobObject1=new Bob(10,450,20,20);
	bobObject2=new Bob(70,450,20,20);
	bobObject3=new Bob(150,450,20,20);
	bobObject4=new Bob(300,450,20,20);
	bobObject5=new Bob(400,450,20,20);
	bobObject6= new Bob(450,450,20,20);
	bobObject7=new Bob(500,450,20,20);
	bobObject8=new Bob(550,450,20,20);
	bobObject9=new Bob(600,450,20,20);
	bobObject10=new Bob(650,450,20,20);
	roofObject=new Roof(400,250,600,10); 
	rope1=new Rope(bobObject1.body,roofObject.body,-250,0);
	rope2=new Rope(bobObject2.body,roofObject.body,-200,0);
	rope3=new Rope(bobObject3.body,roofObject.body,-150,0);
	rope4=new Rope(bobObject4.body,roofObject.body,-100,0);
	rope5=new Rope(bobObject5.body,roofObject.body,-50,0);
	rope6=new Rope(bobObject6.body,roofObject.body,0,0);
	rope7=new Rope(bobObject7.body,roofObject.body,50,0);
	rope8=new Rope(bobObject8.body,roofObject.body,100,0);
	rope9=new Rope(bobObject9.body,roofObject.body,150,0);
	rope10=new Rope(bobObject10.body,roofObject.body,200,0);
}


function draw() {
background("gray");	
Engine.update(engine);  	
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
rope6.display();
rope7.display();
rope8.display();
rope9.display();
rope10.display();
bobObject1.display();
bobObject2.display();
bobObject3.display();
bobObject4.display();
bobObject5.display();
bobObject6.display();
bobObject7.display();
bobObject8.display();
bobObject9.display();
bobObject10.display();
roofObject.display();


text(mouseX+","+mouseY,mouseX,mouseY);
  rectMode(CENTER);
  
  
 
}

function keyPressed(){
if(keyCode== UP_ARROW){
Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-60,y:-145});
}
	}

