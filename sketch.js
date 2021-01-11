const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world; // myEngine and myWorld these are our object
var ground;
var ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world; // .world is the property of the engine which creates the world.

  var ground_options={
    isStatic:true 
  }
  ground = Bodies.rectangle(200,390,200,20,ground_options);
  World.add(world,ground);
console.log(ground);
console.log(ground.type);
console.log(ground.position.x);
console.log(ground.position.y);

var ball_options={
  restitution:1.0 // restitutions means how bouncy the ball is.
}
ball = Bodies.circle(200,100,20,ball_options);
World.add(world, ball);
}

function draw() {
  background(0);  // r => 0-255 g=> 0-255 b=> 0-255
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20,20); // the same width & height makes a circle.

} 