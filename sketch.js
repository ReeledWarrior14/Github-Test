var Engine = Matter.Engine;
var Worlds = Matter.World;
var Bodies = Matter.Bodies;

var engine, world;

var ground;

function setup() {
  createCanvas(400,400);

  angleMode(DEGREES);

  engine = Engine.create();
  world = engine.world;

//   var optionsPart1 = {
    // restitution : 1,
    // friction : 2
//   }

//   bodies = Bodies.circle(200, 200, 20, optionsPart1);
  
//   var options = {
    // isStatic : true
//   }

//   bodiesPart2 = Bodies.rectangle(200, 300, 400, 20, options);
//   Worlds.add(world, bodies);
//   Worlds.add(world, bodiesPart2);
  Engine.run(engine);

  ground = new GROUND(200, 380, 400, 20);

  box1 = new BOXES(150, 340, 40, 40);
  boxRemake = new BOXES(250, 340, 40, 40);

  roof1 = new ROOF(150, 10, 10, 110, 2 * PI);

  pig1 = new PIG(200, 360, 100, 100);
}

function draw() {
  background(220);  
  
  rectMode(CENTER);
//   ellipse(bodies.position.x, bodies.position.y, 20, 20);
//   rect(bodiesPart2.position.x, bodiesPart2.position.y, 400, 20);
    ground.display();

    push();
    fill('brown');
    box1.display();
    boxRemake.display();
    pop()

    roof1.display();

    pig1.displayPig2();
}