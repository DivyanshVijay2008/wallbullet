var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
car = createSprite(200,200,20,20);
wall = createSprite(1200,200,100,300);

  car.velocityX = 5;

 speed=random(40,60);
 weight=random(400,1500);
wall.width=random(300,700)
}

function draw() {
  background("black");
  

  if(wall.x-car.x < (car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation=0.5 * weight * speed* speed/22509;
    if(deformation>180)
    {
      car.shapeColor=color("white");
      wall.shapeColor=color("white");
    }
    if(deformation<180 && deformation>100)
    {
      car.shapeColor=color("green");
      wall.shapeColor=color("white");
    }
    if(deformation<100)
    {
      car.shapeColor=color("red");
      wall.shapeColor=color("white");
    }
  }

  drawSprites();
  
}
