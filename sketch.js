// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.
var engine;
var world;
var tank1, tank2;
var semicircle;
var ball1,ball2,ground;
var shooter1;
//var ball3;
//var constraint1;
/*
const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/

function setup() {
    var canvas = createCanvas(800,500);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(400,500,820,20);
    tank1 =new Tanker (100,485,120,30);
    tank2 = new Tanker (100,455,120,30);
    ball1 = new Ball (600,250,50);
    ball2 = new Ball (530,300,50);
    shooter1 = new Shooter(150,410,80,50,PI/2);
    //constraint1 = new ShootBall(ball3,{x:150,y:410});
    //ball3 = new CanonBall(mouseX,mouseY,40);
    
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.

}

function draw() {
    background(0);
    Engine.update(engine);
    tank1.display();
    tank2.display();
    fill (169,180,194);
    arc(100,440, 120, 120, PI,0, CHORD);
    shooter1.display();
    ball1.display();
    ball2.display();
    //ball3.display();
    ground.display();
   // constraint1.display();

    
    
    
    
// Remember to update the Matter Engine and set the background.
}


function keyReleased() {
    // Call the shoot method for the cannon.
}