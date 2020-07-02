var paper1,dustbin1,dustbin2,dustbin3,ground1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 //World.add(world, ground);
	 
	 paper1=new Paper(400,650,70,70);
	 dustbin1=new Dustbin(1200,650);
	 ground1=new Ground(800,670,1600,10);
	
	 sling = new Launch(paper1.body,{x:200,y:100});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  dustbin1.display();
  ground1.display();
  sling.dispaly();
	
   drawSprites();
}

function keyPressed(){
	if (keyCode=== UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:300,y:-300});
	}
}
function mouseDragged(){
    Matter.Body.setPosition(paper1.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    sling.fly();
}




