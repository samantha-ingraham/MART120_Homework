function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255,255,200);
  
  
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
  textSize(25)
  text('Sammy Jo',280,370)
  textSize(40)
  text('Springtime',10,50)
}