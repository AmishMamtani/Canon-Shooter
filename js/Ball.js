class Ball {
  constructor(x,y,radius) {
    var options ={
     // isStatic:true 
       
      frictionAir: 0,
        friction: 0,
        frictionStatic: 1,
        inertia: Infinity,
        restitution: 1.0
        
        
    }
    this.body = Bodies.circle(x,y,30,options);
    this.radius = radius
   World.add(world,this.body);
    
  }

  display() {
var pos = this.body.position;
//circleMode(CENTER);
push ();
fill (255,202,58);
circle(pos.x,pos.y,this.radius);
pop ();
  }
}
