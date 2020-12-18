const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var base,box;
var stand1,stand2; 
var block1,block2,block3,block4,block5,block6,block7,block8;
var block9,block10,block11,block12,block13,block14,block15,block16,block17,block18,block19,block20;
var block21,block22,block23,block24,block25,block26;
var score = 0;
var text;

function preload(){
  ballIMG = loadImage("ball.png");
}

function setup() {
  createCanvas(1000,600);

 engine = Engine.create();
 world = engine.world;

  base = new Base(width/2,580,width,20);
  box = new Box (width/2,300,50,50)
  
  stand1 = new Base(width/2 - 100,380,200,20);
  stand2 = new Base(width/2 + 200,250,200,20);
  
  //tower one
  // tower one level one
  block1 = new Box(360,345,30,40);
  block2 = new Box(390,345,30,40);
  block3 = new Box(420,345,30,40);
  block4 = new Box(450,345,30,40);
  block5 = new Box(480,345,30,40);
  block6 = new Box(330,345,30,40);
 
  //tower one level two
  block7 = new Box(360,310,30,40);
  block8 = new Box(390,310,30,40);
  block9 = new Box(420,310,30,40);
  block10 = new Box(450,310,30,40);

  //tower level three
  block11 = new Box(390,280,30,40);
  block12 = new Box(420,280,30,40);

  //tower level four
  block13 = new Box(405,240,30,40);

//tower two
//tower two level one
  block14 = new Box(620,210,30,40);
  block15 = new Box(650,210,30,40);
  block16 = new Box(680,210,30,40);
  block17 = new Box(710,210,30,40);
  block18 = new Box(740,210,30,40);
  block19 = new Box(770,210,30,40);

  //tower two level two
  block20 = new Box(650,170,30,40);
  block21 = new Box(680,170,30,40);
  block22 = new Box(710,170,30,40);
  block23 = new Box(740,170,30,40);

  //tower two level three
  block24 = new Box(680,130,30,40);
  block25 = new Box(710,130,30,40);

  //tower two level one
  block26 = new Box(695,90,30,40);


  polygon = Bodies.circle(50,200,20,{density: 0.8});
  World.add(world,polygon);
  
  sling = new Slingshot(polygon,{x: 80, y: 330});
  
  text("SCORE : "+score ,750,40)

}

function draw() {
  background(150);  

 Engine.update(engine);
 
 image(ballIMG,polygon.position.x,polygon.position.y,50,50);

  base.display();
  fill("yellow");
  stand1.display();
  fill("yellow");
  stand2.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  sling.display(); 

// text("x : "+ mouseX + ", y :"+mouseY,mouseX,mouseY);
  
}

function mouseDragged(){
  Matter.Body.setPosition(polygon,{x: mouseX, y: mouseY});
}

function mouseReleased(){
  sling.fly();
}

function keyPressed(){
  if(keyCode === 32){
    //mistake one written slingShot instead of sling
    sling.attach(polygon);
  }
}

async function getBgIMG(){

   var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  
   var responseJSON = await response.json();
   var datetime = responseJSON.datetime;
   var hour = datetime.slice()//dont know what is slice
  
   if(hour >= 06 && hour <= 18){
      backgroundImg = loadImage("sprites/bg.png");
   }
  else{
    backgroundImg = loadImage("sprites/night.jpg");   
    console.log(backgroundImg)
   }
  }