var directionf=1
var directionb1=1;
var directionb2=1;
var flowerx=50;
var flowery=310;
var bee1x=310;
var bee2x=375
var bee1y=250;
var bee2y=25;
var movement
var springtimesize= 20;
var springtimeGrowing = true;
let drawBee = function(x, y) {
  // Draw bee wings
  fill(200, 200, 200, 150); // Semi-transparent white color for wings
  ellipse(x - 2, y - 10, 15, 20); // Left wing
  ellipse(x + 3, y - 10, 15, 20); // Right wing
  // Draw bee body
  fill(255, 255, 0); // Yellow color for bee body
  ellipse(x, y, 35, 25); // Main body ellipse
  // Draw bee stripes
  fill(0); // Black color for stripes
  ellipse(x - 5, y, 5, 25);
  ellipse(x + 5, y, 5, 25); 
  ellipse(x + 15, y, 5, 11);
  // Draw bee eye
  ellipse(x - 12, y - 3, 2, 2);
};
function drawFlower(x, y) {
  // Draw petals
  fill(255); // White color for petals
  circle(x - 10, y - 20, 30);//you have no idea how long this took to get just right//
  circle(x + 10, y + 20, 30); 
  circle(x + 10, y - 20, 30); 
  circle(x - 10, y + 20, 30); 
  circle(x - 20, y - 10, 30); 
  circle(x + 20, y + 10, 30); 
  circle(x + 20, y - 10, 30); 
  circle(x - 20, y + 10, 30); 
  circle(x - 13, y-12, 20); 
  circle(x + 13, y+12, 20); 
  circle(x+12, y - 11, 20); 
  circle(x-12, y + 11, 20); 
  circle(x - 15, y, 20); 
  circle(x + 15, y, 20); 
  circle(x, y - 15, 20); 
  circle(x, y + 15, 20); 
  // Draw center
  fill(255, 255, 0); // Yellow color for center
  circle(x, y, 25);
  
}

function setup() {
  createCanvas(400, 400);
  //random speed
  movement = (random()*4)
}

function draw() {
  background(255,255,200);
  
  //draws bees and flowers
  drawFlower(flowerx,flowery);
  drawBee(bee1x,bee1y);
  drawBee(bee2x,bee2y);
  
  //moves flower
  flowerx+= directionf 
  if (flowerx>= width - 25) 
  {directionf=-1*movement}
  else if (flowerx<= 25) 
    {directionf=1*movement}
  
  // moves bee1
  bee1y+=directionb1;
  if (bee1y>= height -25)
    {directionb1=-1*movement}
  else if (bee1y<=25)
    {directionb1=1*movement}
  
  //moves bee 2
  bee2x += directionb2;
  bee2y -= directionb2; 
  if (bee2y >= height - 25) {
    directionb2 = 1*movement;
  } else if (bee2y <= 25) {
    directionb2 = -1*movement;
  }
  
  //portrait
  fill(139, 69, 19); 
  circle(200,250,140)//furthest back part of hair
  triangle(200,109,270,270,270,145);//back part of hair
  triangle(200,109,130,270,130,140);//back part of hair
  fill(255, 204, 165);//face color
  ellipse(200, 190, 135, 160);
  fill(139, 69, 19); // Brown color
  triangle(155, 152, 190, 150, 190, 155); //eyebrow
  triangle(210, 152, 250, 150, 210, 155); // eyebrow
  triangle(220,115,274,200,260,130);//hair in front of face but behind bangs
  triangle(180,120,135,175,150,125);//same as before
  triangle(200,109,270,190,250,120);//forward most bangs
  triangle(200,109,138,160,157,120);//forward most bangs
 
  line(160, 160, 170, 170);//eyelashes
  line(160, 180, 170, 170);//
  line(230, 170, 240, 160);//
  line(230, 170, 240, 180);//
  fill(255);//white for white of eyes
  ellipse(170, 170, 25, 20); // Left eye
  ellipse(230, 170, 25, 20); // Right eye
  fill(139, 69, 19)//iris color
  ellipse(170, 170, 15, 15); // iris
  ellipse(230, 170, 15, 15); // iris
  fill(0);//pupil color
  ellipse(170, 170, 7, 7); // Left pupil
  ellipse(230, 170, 7, 7); // Right pupil
  //i cant shee without my glasses
  noFill();
  strokeWeight(2);
  rect(150, 150, 40, 40); // Left lens
  rect(210, 150, 40, 40); // Right lens
  line(190, 150, 210, 150); // nose bit
  
  // nose
  fill(255, 204, 153); //nose color
  triangle(200, 190, 195, 210, 205, 210); //nose
  
  // mouth
  noFill();
  stroke(0);
  arc(200, 220, 40, 20, 0, PI);
  
  // freckles
  point(160, 205);
  point(165, 200);
  point(170, 205);
  point(175, 200);
  point(180, 205);
  point(185, 200);
  point(190, 205);
  point(195, 200);
  point(200, 205);
  point(205, 200);
  point(210, 205);
  point(215, 200);
  point(220, 205);
  point(225, 200);
  point(230, 205);
  point(235, 200);
  
  //signature
  textSize(20);
  text('Sammy Jo',280,370)
  //title
  textSize(springtimesize)
  text('Springtime',10,50)
  //Size of springtime, not going by 4pts each time bc it's too quick and annoys me //
 if (springtimeGrowing) {
    springtimesize+=0.5;
    if (springtimesize>= 60) { // If size reaches 60 points
        springtimeGrowing = false; // Start shrinking
    }
} else {
    springtimesize -= 0.5;
    if (springtimesize <= 40) { // If size reaches 40 points
        springtimeGrowing = true; // Start growing again
    }
}
  }