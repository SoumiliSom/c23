const Engine = Matter.Engine
 const World = Matter.World
  const Bodies = Matter.Bodies
  
   var engine,world,box1,ground0;

    function setup() { 
      createCanvas(400,400);

       engine = Engine.create(); 
       world = engine.world; 
       box1=new box(100,200,50,50); 
       ground0=new ground(200,300,400,20)
    }

    function draw() {

    background("black");

   Engine.update(engine);
   box1.display();
   ground0.display(); 
  
   }