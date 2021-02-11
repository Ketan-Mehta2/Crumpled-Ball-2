
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var dustbin_img;
var paper_img;
var back;

function preload() {
  dustbin_img = loadImage("sprites/dustbin.png");
  paper_img = loadImage("sprites/paper.png");
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
   
	//Create the Bodies Here.
    ground = new Ground(400,height,800,20);
	  paper = new Paper(100,680,10);
    paper.addImage(paper_img);
    dustbin = createSprite(500,680,10,100);
    dustbin.addImage(dustbin_img);


	Engine.run(engine);
  
}


function draw() {
  background(255);
  rectMode(CENTER);
  
  ground.display();
  paper.display();
  
  
  drawSprites();
}