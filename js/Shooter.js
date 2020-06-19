class Shooter{
    constructor(x,y,width,height,angle){
        var options={
            isStatic:true
        };
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        var pos = this.body.position
        //pos.y=mouseY
        push ();
        rectMode(CENTER)
        rotate (angle);
        noStroke();
        rect(pos.x,pos.y,this.width,this.height);
        pop ();
    }
}