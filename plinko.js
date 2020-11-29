class Plinko{  
    constructor(x,y){
var option={
  isStatic:true,
  friction:0.5,
  restitution:0,
  density:1.2,
 
}

this.body=Bodies.circle(x,y,10,option);
this.x=x;
this.y=y;
this.r=10;



World.add(world,this.body);
  }
  
      
  
  display(){
var plipos=this.body.position;
push();
translate(plipos.x,plipos.y);
ellipseMode(CENTER);
fill("white");
ellipse(0,0,this.r,this.r);
pop();
  }
}