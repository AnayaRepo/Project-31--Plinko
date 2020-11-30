class Plinko{
    constructor(x,y,radius){
        var options={
            isStatic: true,
        }
        this.body= Bodies.circle(x, y, radius, options);
        this.x= x;
        this.y= y;
        this.radius = radius;
        World.add(world, this.body);
    }
    display(){
        var pos= this.body.position;
        push();
        fill("black");
        translate(0, 0);
        circle(pos.x, pos.y, this.radius);
        ellipseMode(RADIUS);
        pop();

    }
}