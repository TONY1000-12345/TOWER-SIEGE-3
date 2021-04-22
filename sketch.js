const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world,ball1;

function setup() 
{
  createCanvas(1500, 600);
  engine = Engine.create();
  world = engine.world;
  ball1= new Wball(200,200,80,80)
  ground= new Ground(600,600,1200,20)
  building1= new Building(450,300,90,70)
  building2= new Building(550,300,90,70)
  building3= new Building(650,300,90,70)
  building4= new Building(750,300,90,70)
  building5= new Building(850,300,90,70)
  building6= new Building(950,300,90,70)
  building7= new Building(500,250,90,70)
  building8= new Building(600,250,90,70)
  building9= new Building(700,250,90,70)
  building10= new Building(800,250,90,70)
  building11= new Building(900,250,90,70)
  building12= new Building(550,200,90,70)
  building13= new Building(650,200,90,70)
  building14= new Building(750,200,90,70)
  building15= new Building(850,200,90,70)
  building16= new Building(625,150,90,70)
  building17= new Building(725,150,90,70)
  building18= new Building(825,150,90,70)
  building19= new Building(700,100,90,70)
  building20= new Building(800,100,90,70)

  
  constraint= new Control(ball1.body,{x:200, y:200})
}

function draw()
 {
  background(220);
  
  Engine.update(engine);
  ball1.display()
  ground.display()
  building1.display()
  building2.display()
  building3.display()
  building4.display()
  building5.display()
  building6.display()
  building7.display()
  building8.display()
  building9.display()
  building10.display()
  building11.display()
  building12.display()
  building13.display()
  building14.display()
  building15.display()
  building16.display()
  building17.display()
  building18.display()
  building19.display()
  building20.display()
  
  
  
  constraint.display()
}

function mouseDragged(){
  
     Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
 
}