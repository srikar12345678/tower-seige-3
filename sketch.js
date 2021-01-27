const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;


function setup(){
     var canvas = createCanvas(1000,400);
    
    engine = Engine.create();
    world = engine.world;
    ground1=new Ground(123,395,3000,15);
   //286,260
   ground2=new Ground(286,260,220,10);
   ground3=new Ground(700,192,180,15);
   
   block1=new Block(200,235,30,40);

   block2=new Block(230,235,30,40);
   block3=new Block(260,235,30,40);
   block4=new Block(290,235,30,40);
   block5=new Block(320,235,30,40);
   block6=new Block(350,235,30,40);
 block7=new Block(380,235,30,40);

   block8=new Box(230,195,30,40);
   block9=new Box(260,195,30,40);
   block10=new Box(290,195,30,40);
   block11=new Box(320,195,30,40);
   block12=new Box(350,195,30,40);
   
   block13=new Bow(260,155,30,40);
   block14=new Bow(290,155,30,40);
   block15=new Bow(320,155,30,40);

   block16=new Card(290,115,30,40);

   block17=new Bow(630,165,30,40);
   block18=new Bow(660,165,30,40);
   block19=new Bow(690,165,30,40);
   block20=new Bow(720,165,30,40);
   block21=new Bow(750,165,30,40);

  block22=new Box(660,125,30,40);
  block23=new Box(690,125,30,40);
  block24=new Box(720,125,30,40);

  block25=new Block(690,85,30,40);
  polygon1=new Polygon(50,181,50,50);
  slingshot= new Chain(polygon1.body,{x:100,y:200});
   


    


}
function draw(){
    background("grey");
    Engine.update(engine);
    


   
    text(mouseX+","+ mouseY,mouseX,mouseY);
    ground1.display();
    block1.display();
    ground2.display();
    ground3.display();
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
    block16.getTime();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    polygon1.display();
    slingshot.display();
    
    
    







    drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
	slingshot.fly();



}
function keyPressed(){
  if(keyCode===32){
    slingshot.attach(polygon1.body);
  }
}
// async function getTime(){
//  var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
//   var responsejson= await response.json();
//   var dt=responsejson.datetime;
//   var hour=dt.slice(11,13);

 
   

//  if(hour >=06 && hour<=14){
//   block1.fill="red"; 
//    block2fill="red";
//    block3.fill="red";
//    block4.fill="red";
//    block5.fill="red";
//    block6.fill="red";
//    block7.fill="red";

//    block8.fill="blue";
//    block9.fill="blue";
//    block10.fill="blue";
//    block11.fill="blue";
//    block12.fill="blue";

//    block13.fill="pink";
//    block14.fill="pink";
//    block15.fill="pink";

//    block16.fill="white";

//    block17.fill="pink";
//    block18.fill="pink";
//    block19.fill="pink";
//    block20.fill="pink";
//    block21.fill="pink";

//    block22.fill="blue";
//    block23.fill="blue";
//    block24.fill="blue";

//    block25.fill="grey";

//  }
//  else{
//   block1.fill="blue"; 
//   block2fill="blue";
//   block3.fill="blue";
//   block4.fill="blue";
//   block5.fill="blue";
//   block6.fill="blue";
//   block7.fill="blue";

//   block8.fill="pink";
//   block9.fill="pink";
//   block10.fill="pink";
//   block11.fill="pink";
//   block12.fill="pink";

//   block13.fill="grey";
//   block14.fill="grey";
//   block15.fill="grey";

//   block16.fill="white";

//   block17.fill="grey";
//   block18.fill="grey";
//   block19.fill="grey";
//   block20.fill="grey";
//   block21.fill="grey";

//   block22.fill="pink";
//   block23.fill="pink";
//   block24.fill="pink";

//   block25.fill="blue";
// }
//  }


  
 

