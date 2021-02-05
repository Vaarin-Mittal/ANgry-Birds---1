class Box
{
    //properties
    constructor(x,y,width,height){
        


        var options = {

            restitution : 1.5,
            friction : 1,
            density : 1

            }
        this.body=Bodies.rectangle(x,y,width,height);
        World.add(world,this.body);
        this.width=width;
        this.height=height;
        
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        strokeWeight(6);
        stroke("green")
        fill("black");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop()
    }



}