
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1;


var particles=[];
var plinkos=[];
var divisions=[];
var divisionheight=300;
function preload()
{
	
}

function setup() {
	createCanvas(480, 800);


	engine = Engine.create();
	world = engine.world;
  for(var k=0;k<=width;k=k+80){
    divisions.push(new Division(k,height-divisionheight/2,10,divisionheight));
  }
  for(var j=30;j<=width;j=j+40){
    plinkos.push(new Plinko(j,75));
    
  }
  for(var i=35;i<=width-10;i=i+45){
    plinkos.push(new Plinko(i,145));
    
  }
  for(var l=30;l<=width-10;l=l+45){
    plinkos.push(new Plinko(l,205));
    
  }
  for(var m=20;m<=width-10;m=m+45){
    plinkos.push(new Plinko(m,275));
    
  }
	//Create the Bodies Here.
ground1=new Ground(240,790,480,15);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  if(frameCount%60===0){
    particles.push(new Particles(random(width/2-10,width/2+10),10,10));
  }
  ground1.display();
 for(k=0;k<divisions.length;k++){
   divisions[k].display();
 }
 for(j=0;j<plinkos.length;j++){
  plinkos[j].display();
}
for(i=0;i<plinkos.length;i++){
  plinkos[i].display();
}
for(l=0;l<plinkos.length;l++){
  plinkos[l].display();
}
for(m=0;m<plinkos.length;m++){
  plinkos[m].display();
}
for(var p=0;p<particles.length;p++){
  particles[p].display();
}
  drawSprites();
 
}



