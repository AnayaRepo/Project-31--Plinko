const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground;
//var division1, division2, division3, division4, division5, division6, division7;
//var plinko1;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  createCanvas(480,575);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(240, 565, 480, 20);

  //divisions
  for(var i=0; i<=innerWidth; i=i+80){
    divisions.push(new Division(i, height-divisionHeight/2, 10, divisionHeight));
  } 

  //Plinkos
  for(var k=40; k<=width; k=k+50){
    plinkos.push(new Plinko(k, 75, 10));
  }

  for(var k=15; k<=width-10; k=k+50){
    plinkos.push(new Plinko(k, 175, 10))
  }

  //particles
  
  
}

function draw() {
  console.log(particles.length);
  background("lavender");  
  Engine.update(engine);

  //division
  for(var i=0; i<divisions.length; i++){
    divisions[i].display();
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10, 10));
  }

  //particles
  for(var i=0; i<particles.length; i++){
    particles[i].display();
  }

  //plinko
  for(var k=0; k<plinkos.length; k++){
    plinkos[k].display();
  }

  ground.display();

  drawSprites();
}



