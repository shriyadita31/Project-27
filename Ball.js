class Ball{
    constructor(x,y) {
        var options={
           // restitution: 0.3,
            frictionAir: 0.005,
            density: 1
        }
    
        this.body=Bodies.circle(x,y,40,options);
       // this.image=loadImage("paper.png");
        this.radius=40;
        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        fill (253,0,255);
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
       // image(this.image,0,0,70,70);
        pop();
    }
}